import { useStatusContext, useStorageContext } from "../../../contexts/";
import { statusMap, storageMap } from "../../../database";
import { Buttons } from "./Modal";

export function Event({ eventData, closeModal }) {
	const { updateStatus } = useStatusContext();
	const { updateItem } = useStorageContext();

	function getEventConsequence({ eventKey, value, index }) {
		if (!storageMap.has(eventKey) && !statusMap.has(eventKey)) return;

		const newValue = value < 0 ? value.toString() : `+${value}`;
		const { description } = storageMap.get(eventKey) || statusMap.get(eventKey);

		return (
			<span key={index}>
				{description}: {newValue}
			</span>
		);
	}

	function closeEventModal() {
		closeModal();

		for (const { key, value } of eventData.consequences) {
			if (statusMap.has(key)) {
				updateStatus({ state: key, value });
			}
			if (storageMap.has(key)) {
				updateItem({ key, value });
			}
		}
	}

	return (
		<>
			<p>{eventData.description}</p>

			<div>
				{eventData.consequences.map(({ key: eventKey, value }, index) =>
					getEventConsequence({ eventKey, value, index })
				)}
			</div>

			<Buttons maxWidth="100%">
				<button onClick={closeEventModal}>OK</button>
			</Buttons>
		</>
	);
}
