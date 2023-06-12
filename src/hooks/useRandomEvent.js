import { useEffect, useRef } from "react";
import { randomEvents } from "../database/events.js";
import { generateRandomInt } from "../utils/generateRandomInt";

/*
	Time Intervals
	240 = 11h (interval = 4h)
	300 = 12h (interval = 5h)
	360 = 13h (interval = 6h)
	420 = 14h (interval = 7h)
	480 = 15h (interval = 8h)
*/

function useRandomEvent() {
	const timeIntervals = [240, 300, 360, 420, 480];
	const timeInterval = useRef();

	useEffect(setTimeInterval, []);

	function isLucky() {
		return generateRandomInt() > 0;
	}

	function isValidTime(time) {
		return time > 0 && time % timeInterval.current === 0;
	}

	function setTimeInterval() {
		const min = 0;
		const max = timeIntervals.length;
		const index = generateRandomInt(min, max);

		timeInterval.current = timeIntervals[index];
	}

	function getEventConsequences(consequences) {
		const newConsequences = [];

		for (const { key, value, min = 1, max = min + 2 } of consequences) {
			if (value !== "random") {
				newConsequences.push({ key, value });
				continue;
			}

			const newValue = generateRandomInt(min, max);
			newConsequences.push({ key, value: newValue });
		}

		return newConsequences;
	}

	function getEvent(time) {
		if (!isValidTime(time) || !isLucky()) return null;

		const min = 0;
		const max = randomEvents.length;
		const index = generateRandomInt(min, max);

		const event = randomEvents[index];
		const consequences = getEventConsequences(event.consequences);

		return { ...event, consequences };
	}

	return { getEvent, setTimeInterval };
}

export { useRandomEvent };
