import { ICONS_NAMES, STATUS_KEYS } from "../components/enums";

function freezeMap(map) {
	const action = () => {
		throw new Error("Object is frozen.");
	};

	map.set = action;
	map.delete = action;
	map.clear = action;
}

const statusMap = new Map([
	[
		STATUS_KEYS.hungry,
		{
			initial: 0,
			maxValue: 10,
			icon: ICONS_NAMES.restaurant,
		},
	],
	[
		STATUS_KEYS.mental,
		{
			initial: 50,
			maxValue: 50,
			icons: {
				happy: ICONS_NAMES.happy,
				sad: ICONS_NAMES.sad,
			},
		},
	],
	[
		STATUS_KEYS.physical,
		{
			initial: 0,
			icon: ICONS_NAMES.barbell,
		},
	],
	[
		STATUS_KEYS.unhealth,
		{
			initial: 0,
			maxValue: 5,
			icon: ICONS_NAMES.bandage,
		},
	],
	[
		STATUS_KEYS.written,
		{
			initial: 0,
			icon: ICONS_NAMES.create,
		},
	],
]);

freezeMap(statusMap);

export { statusMap };
