import { choiceEvents } from "../database/events.js";
import { generateRandomInt } from "../utils/generateRandomInt";

function useChoiceEvent() {
	function formatButtonEvent(event) {
		const newConsequences = [];

		for (const { key, value, min = 1, max = min + 2 } of event.consequences) {
			if (value !== "random") {
				newConsequences.push({ key, value });
				continue;
			}

			const newValue = generateRandomInt(min, max);
			newConsequences.push({ key, value: newValue });
		}

		const { description, record } = event;

		return { description, record, consequences: newConsequences };
	}

	function getButtonEvent(events, probabilities) {
		const randomInt = generateRandomInt(1, 100);

		for (const [index, probability] of probabilities.entries()) {
			if (randomInt <= probability) {
				return formatButtonEvent(events[index]);
			}
		}

		return null;
	}

	function formatEvent({ title, description, buttons }) {
		const newButtons = [];

		for (const { text, events } of buttons) {
			let event = events.data;
			let record = events.record;

			if (event) {
				event = getButtonEvent(event, events.probabilities);
				record = event?.record || record;
			}

			const formattedButton = { text, onClick: { event, record } };
			newButtons.push(formattedButton);
		}

		return { title, description, buttons: newButtons };
	}

	function getEvent({ day, time }) {
		const event = choiceEvents[day] ? choiceEvents[day][time] : null;

		if (!event) return null;

		const formattedEvent = formatEvent(event);

		return formattedEvent;
	}

	return { getEvent };
}

export { useChoiceEvent };
