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

const ICONS = {
	medkit: FaMedkit,
	bandage: IoBandage,
	create: IoCreate,
	book: IoBook,
	library: IoLibrary,
	barbell: IoBarbellOutline,
	restaurant: IoRestaurant,
	food: GiCannedFish,
	happy: IoHappy,
	sad: IoSad,
	sunny: IoSunny,
	sunset: GiSunset,
	moon: IoMoon,
	paw: IoPaw,
	close: AiFillCloseCircle,
};

export function Icons({ type }) {
	const Icon = ICONS[type];

	if (!Icon) {
		return <AiFillCloseCircle color="red" style={{ marginRight: 10 }} />;
	}

	return <Icon style={{ marginRight: 10 }} />;
}
