import { FaMedkit } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { GiCannedFish, GiSunset } from "react-icons/gi";
import {
	IoCreate,
	IoBarbellOutline,
	IoRestaurant,
	IoHappy,
	IoBandage,
	IoSunny,
	IoMoon,
	IoPaw,
	IoBook,
	IoSad,
	IoLibrary,
} from "react-icons/io5";

import { ICONS_NAMES } from "../enums";

const ICONS = {
	[ICONS_NAMES.medkit]: FaMedkit,
	[ICONS_NAMES.bandage]: IoBandage,
	[ICONS_NAMES.create]: IoCreate,
	[ICONS_NAMES.book]: IoBook,
	[ICONS_NAMES.library]: IoLibrary,
	[ICONS_NAMES.barbell]: IoBarbellOutline,
	[ICONS_NAMES.restaurant]: IoRestaurant,
	[ICONS_NAMES.food]: GiCannedFish,
	[ICONS_NAMES.happy]: IoHappy,
	[ICONS_NAMES.sad]: IoSad,
	[ICONS_NAMES.sunny]: IoSunny,
	[ICONS_NAMES.sunset]: GiSunset,
	[ICONS_NAMES.moon]: IoMoon,
	[ICONS_NAMES.paw]: IoPaw,
	[ICONS_NAMES.close]: AiFillCloseCircle,
};

export function Icons({ type, ...otherProps }) {
	const Icon = ICONS[type];

	if (!Icon) {
		return <AiFillCloseCircle color="red" style={{ marginRight: 10 }} />;
	}

	return <Icon style={{ marginRight: 10 }} {...otherProps} />;
}
