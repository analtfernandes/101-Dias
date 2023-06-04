import { STATUS_KEYS } from "../enums";
import { format, freeze } from "./formatHelper";

const data = [
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
		key: STATUS_KEYS.read,
		text: "Ler",
		states: [
			{ state: STATUS_KEYS.time, value: 1 },
			{ state: STATUS_KEYS.read, value: 1 },
		],
		disabled: false,
	},
	{
		key: STATUS_KEYS.sleep,
		text: "Dormir",
		states: [],
		disabled: true,
	},
];

const dataFreeze = freeze.array(data);

const dataMapFormat = data.map((button) => [button.key, button]);
const map = format.map(dataMapFormat, "Buttons Entity Map");

const buttonsEntity = { data: dataFreeze, map };

export { buttonsEntity };
