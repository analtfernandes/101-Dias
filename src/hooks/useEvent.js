import { events } from "../database/events.js";

function useEvent() {
	function getEvent({ day, time }) {
		return events[day] ? events[day][time] : null;
	}

	return { getEvent };
}

export { useEvent };
