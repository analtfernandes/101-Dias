import { ICONS_NAMES, STORAGE_KEYS } from "../components/enums";

function freezeMap(map) {
	const action = () => {
		throw new Error("Object is frozen.");
	};

	map.set = action;
	map.delete = action;
	map.clear = action;
}

const storageMap = new Map([
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
]);

freezeMap(storageMap);

export { storageMap };
