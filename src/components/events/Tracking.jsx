import { useEffect, useState, useRef } from "react";
import { useStatusContext } from "../../contexts";
import { choiceEvents, events } from "../../database/events.js";
import { MODAL_TYPES } from "../../enums";
import { useSave, useRandomEvent } from "../../hooks";

import { Modal } from "./Modal.jsx";

export function Tracking() {
	const [modalConfig, setModalConfig] = useState({ isOpen: false, type: "" });
	const eventData = useRef({});
	const { status } = useStatusContext();
	const randomEvent = useRandomEvent();
	const saveGame = useSave();

	useEffect(() => {
		const END_DAY_HOUR = 960;
		const HOUR_FOUR = 240;
		const day = status.day;
		const time = status.time;

		if (time === END_DAY_HOUR) return;

		if (time % HOUR_FOUR === 0) saveGame();

		if (time === 0) randomEvent.setTimeInterval();

		eventData.current = randomEvent.getEvent(time);

		if (eventData.current) {
			setModalConfig({ isOpen: true, type: MODAL_TYPES.event });
			return;
		}

		if (!events[day] && !choiceEvents[day]) return;

		eventData.current = choiceEvents[day][time];

		if (eventData.current) {
			setModalConfig({ isOpen: true, type: MODAL_TYPES.choiceEvent });
			return;
		}

		eventData.current = events[day][time];

		if (eventData.current) {
			setModalConfig({ isOpen: true, type: MODAL_TYPES.event });
		}
	}, [status.time]);

	return (
		<Modal
			modalConfig={modalConfig}
			setModalConfig={setModalConfig}
			eventData={eventData.current}
			saveGame={saveGame}
			nextTime={status.time + 1}
		/>
	);
}
