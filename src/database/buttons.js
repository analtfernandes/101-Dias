import { STATUS_KEYS } from "../components/enums";

const buttonsMap = Object.freeze([
	{
		key: STATUS_KEYS.written,
		text: "Escrever",
		states: [
			{ state: STATUS_KEYS.time, value: 1 },
			{ state: STATUS_KEYS.written, value: 1 },
		],
		disabled: false,
	},
	{
		key: STATUS_KEYS.hungry,
		text: "Alimentar-se",
		states: [{ state: STATUS_KEYS.hungry, value: -5 }],
		disabled: false,
	},
	{
		key: STATUS_KEYS.physical,
		text: "Exercitar-se",
		states: [
			{ state: STATUS_KEYS.time, value: 1 },
			{ state: STATUS_KEYS.physical, value: 1 },
		],
		disabled: false,
	},
	{
		key: STATUS_KEYS.sleep,
		text: "Dormir",
		states: [],
		disabled: true,
	},
]);

export { buttonsMap };
