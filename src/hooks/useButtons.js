import { useReducer } from "react";
import { useStatusContext } from "../contexts";
import { buttonsEntity } from "../database";
import { STATUS_KEYS } from "../components/enums";
import { useLocalStorage } from "./index";

const { data: buttonsData } = buttonsEntity;

function sortButtonsByDisabledAttribute(curr) {
	if (curr.disabled) return 1;
	if (!curr.disabled) return 0;
}

function reducer(buttons, action) {
	if (action.do === "add") {
		const newButton = buttonsData.find(({ key }) => key === action.key);
		const newButtons = [...buttons, newButton];

		newButtons.sort(sortButtonsByDisabledAttribute);

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
			}
			return {
				...button,
				disabled: true,
			};
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
			}
			return {
				...button,
				disabled: true,
			};
		});

		return updatedButtons;
	}
}

function getInitialButtons(localStorageHook) {
	const status = localStorageHook.getData();

	const currentButtons = buttonsData.filter(({ key }) => {
		const isBasicButton =
			key === STATUS_KEYS.written ||
			key === STATUS_KEYS.hungry ||
			key === STATUS_KEYS.physical ||
			key === STATUS_KEYS.sleep;

		return status?.hasOwnProperty(key) || isBasicButton;
	});

	currentButtons.sort(sortButtonsByDisabledAttribute);

	return currentButtons;
}

function useButtons() {
	const { status } = useStatusContext();
	const localStorage = useLocalStorage();
	const [buttons, dispatch] = useReducer(
		reducer,
		getInitialButtons(localStorage)
	);

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

	if (status.time === 0 && buttons[0]?.disabled === true) setWakeTime();
	if (status.time === 960 && buttons[0]?.disabled === false) setSleepTime();

	return { buttons, addButton, removeButton };
}

export { useButtons };
