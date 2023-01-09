import { useReducer } from "react";
import { useStatusContext } from "../../contexts";
import { buttonsMap } from "../../database";
import { STATUS_KEYS } from "../enums";

function orderButtonsByDisabledAttribute(curr) {
	if (curr.disabled) return 1;
	if (!curr.disabled) return 0;
}

function reducer(buttons, action) {
	if (action.do === "add") {
		const newButton = buttonsMap.find(({ key }) => key === action.key);

		if (action.key === STATUS_KEYS.pet) {
			newButton.text = action.text;
		}

		const newButtons = [...buttons, newButton];
		newButtons.sort(orderButtonsByDisabledAttribute);

		return [...newButtons];
	}

	if (action.do === "remove") {
		const updatedButtons = buttons.filter(({ key }) => key !== action.key);

		return updatedButtons;
	}

	if (action.do === "set_sleep_time") {
		const updatedButtons = buttons.map((button) => {
			if (button.key === STATUS_KEYS.sleep) {
				return {
					...button,
					disabled: false,
				};
			} else {
				return {
					...button,
					disabled: true,
				};
			}
		});

		return updatedButtons;
	}

	if (action.do === "set_wake_time") {
		const updatedButtons = buttons.map((button) => {
			if (button.key !== STATUS_KEYS.sleep) {
				return {
					...button,
					disabled: false,
				};
			} else {
				return {
					...button,
					disabled: true,
				};
			}
		});

		return updatedButtons;
	}
}

function getInitialButtons() {
	const status = JSON.parse(localStorage.getItem("gameData"));

	const currentButtons = buttonsMap.filter(({ key }) => {
		const isBasicButton =
			key === STATUS_KEYS.written ||
			key === STATUS_KEYS.hungry ||
			key === STATUS_KEYS.physical ||
			key === STATUS_KEYS.sleep;

		return status?.hasOwnProperty(key) || isBasicButton;
	});

	if (status?.pet) {
		const pet = currentButtons.find(({ key }) => key === STATUS_KEYS.pet);
		pet.text = `Brincar com ${status.pet.name}`;
	}

	currentButtons.sort(orderButtonsByDisabledAttribute);

	return currentButtons;
}

function useButtons() {
	const [buttons, dispatch] = useReducer(reducer, getInitialButtons());
	const { status } = useStatusContext();

	function addButton({ key, text = "" }) {
		return dispatch({ do: "add", key, text });
	}

	function removeButton({ key }) {
		return dispatch({ do: "remove", key });
	}

	function setSleepTime() {
		return dispatch({ do: "set_sleep_time" });
	}

	function setWakeTime() {
		return dispatch({ do: "set_wake_time" });
	}

	if (status.time === 960 && buttons[0]?.disabled === false) setSleepTime();
	if (status.time === 0 && buttons[0]?.disabled === true) setWakeTime();

	return { buttons, addButton, removeButton };
}

export { useButtons };
