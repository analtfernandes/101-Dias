import { useEffect, useState, useRef } from "react";
import { useStatusContext } from "../../contexts";
import { choiceEvents, events } from "../../database/events.js";
import { MODAL_TYPES } from "../../enums";

import { Modal } from "./Modal.jsx";

export function Tracking() {
	const { status } = useStatusContext();
	const [modalConfig, setModalConfig] = useState({ isOpen: false, type: "" });
	const eventData = useRef({});

	useEffect(() => {
		if (!events[status.day] && !choiceEvents[status.day]) return;

		eventData.current = choiceEvents[status.day][status.time];

		if (eventData.current) {
			setModalConfig({ isOpen: true, type: MODAL_TYPES.choiceEvent });
			return;
		}

		eventData.current = events[status.day][status.time];

		if (eventData.current) {
			setModalConfig({ isOpen: true, type: MODAL_TYPES.event });
		}
	}, [status.time]);

	return (
		<Modal
			modalConfig={modalConfig}
			setModalConfig={setModalConfig}
			eventData={eventData.current}
		/>
	);
}
