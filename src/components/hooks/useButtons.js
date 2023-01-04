import { useReducer } from "react";
import { useStatusContext } from "../../contexts";

const arrayButtons = [
	{
		key: "written",
		text: "Escrever",
		states: [
			{ state: "time", value: 1 },
			{ state: "written", value: 1 },
		],
		disabled: false,
	},
	{
		key: "hungry",
		text: "Alimentar-se",
		states: [{ state: "hungry", value: -5 }],
		disabled: false,
	},
	{
		key: "physical",
		text: "Exercitar-se",
		states: [
			{ state: "time", value: 1 },
			{ state: "physical", value: 1 },
		],
		disabled: false,
	},
	{
		key: "pet",
		text: "",
		states: [
			{ state: "time", value: 1 },
			{ state: "pet", value: 1 },
		],
		disabled: false,
	},
	{
		key: "sleep",
		text: "Dormir",
		states: [],
		disabled: true,
	},
];

function reducer(buttons, action) {
	if (action.do === "add") {
		const newButton = arrayButtons.find(({ key }) => key === action.key);

		if (action.key === "pet") {
			newButton.text = action.text;
		}

		return [...buttons, newButton];
	}

	if (action.do === "remove") {
		const updatedButtons = buttons.filter(({ key }) => key !== action.key);

		return updatedButtons;
	}

	if (action.do === "set_sleep_time") {
		const updatedButtons = buttons.map((button) => {
			if (button.key === "sleep") {
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
			if (button.key !== "sleep") {
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

	const currentButtons = arrayButtons.filter(
		({ key }) => status.hasOwnProperty(key) || key === "sleep"
	);

	if (status.pet) {
		const pet = currentButtons.find(({ key }) => key === "pet");
		pet.text = `Brincar com ${status.pet.name}`;
	}

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

	if (status.time === 960 && buttons[0].disabled === false) setSleepTime();
	if (status.time === 0 && buttons[0].disabled === true) setWakeTime();

	return { buttons, addButton, removeButton };
}

export { useButtons };
