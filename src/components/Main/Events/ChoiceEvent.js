import { MODAL_TYPES } from "../../enums";
import { Buttons } from "./Modal";

export function ChoiceEvent({ eventData, closeModal }) {
	function closeChoiceEventModal({ event }) {
		let config;

		if (event) {
			config = { isOpen: true, type: MODAL_TYPES.event, data: event };
		}

		closeModal(config);
	}

	return (
		<>
			<h1>{eventData.title}</h1>

			<p>{eventData.description}</p>
			<p style={{ marginTop: "10px" }}>O que fazer?</p>

			<Buttons marginTop="35px">
				{eventData.buttons.map(({ text, onClick }, index) => (
					<button key={index} onClick={() => closeChoiceEventModal(onClick)}>
						{text}
					</button>
				))}
			</Buttons>
		</>
	);
}
