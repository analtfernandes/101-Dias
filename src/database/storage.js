import { ICONS_NAMES, STORAGE_KEYS } from "../enums";
import { format, freeze } from "./formatHelper";

const data = [
	[
		STORAGE_KEYS.food,
		{
			initialQuantity: 30,
			description: "alimentos",
			icon: ICONS_NAMES.food,
		},
	],
	[
		STORAGE_KEYS.health,
		{
			initialQuantity: 5,
			description: "remédios e curativos",
			icon: ICONS_NAMES.medkit,
		},
	],
	[
		STORAGE_KEYS.books,
		{
			initialQuantity: 0,
			description: "livros",
			icon: ICONS_NAMES.library,
		},
	],
];

const dataFreeze = freeze.array(data);

const map = format.map(data, "Storage Entity Map");

const storageEntity = { data: dataFreeze, map };

export { storageEntity };
