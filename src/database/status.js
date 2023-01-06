import { ICONS_NAMES } from "../components/enums";

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
		"hungry",
		{
			initial: 0,
			maxValue: 10,
			icon: ICONS_NAMES.restaurant,
		},
	],
	[
		"mental",
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
		"physical",
		{
			initial: 0,
			icon: ICONS_NAMES.barbell,
		},
	],
	[
		"unhealth",
		{
			initial: 0,
			maxValue: 5,
			icon: ICONS_NAMES.bandage,
		},
	],
	[
		"written",
		{
			initial: 0,
			icon: ICONS_NAMES.create,
		},
	],
]);

freezeMap(statusMap);

export { statusMap };
