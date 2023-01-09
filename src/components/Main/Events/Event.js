import {
	useButtonContext,
	useStatusContext,
	useStorageContext,
} from "../../../contexts/";
import { statusMap, storageMap } from "../../../database";
import { Buttons } from "./Modal";

export function Event({ eventData, closeModal }) {
	const { status, updateStatus, addStatus } = useStatusContext();
	const { storage, updateItem, addItem } = useStorageContext();
	const { addButton } = useButtonContext();

	function getEventConsequence({ eventKey, value, index }) {
		if (value === 0) return;

		const keyDoesNotExist =
			!storageMap.has(eventKey) && !statusMap.has(eventKey);

		if (keyDoesNotExist) return;

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
				if (status[key]) {
					updateStatus({ state: key, value });
					continue;
				}

				addStatus({ key, value });
				addButton({ key });
			}

			if (storageMap.has(key)) {
				const hasKey = storage.find((storage) => storage.key === key);

				if (hasKey) {
					updateItem({ key, value });
					continue;
				}

				addItem({ key, value });
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