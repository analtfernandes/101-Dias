import { STATUS_KEYS, STORAGE_KEYS } from "../enums";
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
		key: STATUS_KEYS.pet,
		text: "Brincar com {pet}",
		states: [
			{ state: STATUS_KEYS.time, value: 1 },
			{ state: STATUS_KEYS.pet, value: 1 },
		],
		disabled: false,
	},
	{
		key: STATUS_KEYS.unhealth,
		text: "Usar remédios/ curativos",
		states: [{ state: STATUS_KEYS.unhealth, value: -1 }],
		disabled: false,
	},
	{
		key: STORAGE_KEYS.radio,
		text: "Ligar o rádio",
		states: [],
		disabled: false,
	},
	{
		key: STORAGE_KEYS.coffee,
		text: "Beber café",
		states: [],
		disabled: false,
	},
	{
		key: STATUS_KEYS.sleep,
		text: "Dormir",
		states: [
			{ state: STATUS_KEYS.day, value: 1 },
			{ state: STATUS_KEYS.time, value: -960 },
		],
		disabled: true,
	},
];

const dataFreeze = freeze.array(data);

const dataMapFormat = data.map((button) => [button.key, button]);
const map = format.map(dataMapFormat, "Buttons Entity Map");

const buttonsEntity = { data: dataFreeze, map };

export { buttonsEntity };
