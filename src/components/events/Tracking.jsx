import { useEffect, useState, useRef } from "react";
import { useStatusContext } from "../../contexts";
import { MODAL_TYPES } from "../../enums";
import {
	useSave,
	useRandomEvent,
	useChoiceEvent,
	useEvent,
	usePet,
} from "../../hooks";

import { Modal } from "./Modal.jsx";

export function Tracking() {
	const [modalConfig, setModalConfig] = useState({ isOpen: false, type: "" });
	const eventData = useRef({});

	const { status } = useStatusContext();
	const randomEvent = useRandomEvent();
	const choiceEvent = useChoiceEvent();
	const event = useEvent();
	const pet = usePet();
	const saveGame = useSave();

	const END_DAY_HOUR = 960;
	const HOUR_FOUR = 240;

	useEffect(() => {
		const day = status.day;
		const time = status.time;

		if (time === END_DAY_HOUR) return;

		if (time % HOUR_FOUR === 0) saveGame();

		if (time === 0) {
			randomEvent.setTimeInterval();
		}

		eventData.current = choiceEvent.getEvent({ day, time });

		if (eventData.current) {
			setModalConfig({ isOpen: true, type: MODAL_TYPES.choiceEvent });
			return;
		}

		eventData.current =
			event.getEvent({ day, time }) || randomEvent.getEvent(time);

		if (time === 0 && day > 7)
			eventData.current = pet.getGift({ day, time, pet: status.pet });

		if (eventData.current) {
			setModalConfig({ isOpen: true, type: MODAL_TYPES.event });
		}

		if (day === 7 && time === 780) {
			setTimeout(pet.namingPet, 500);
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
