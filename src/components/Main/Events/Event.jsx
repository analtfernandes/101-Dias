import { useEffect, useState } from "react";
import {
	useButtonContext,
	useRecordContext,
	useStatusContext,
	useStorageContext,
} from "../../../contexts";
import { storageEntity } from "../../../database";
import { Buttons } from "./Modal.jsx";

const { map: storageMap } = storageEntity;

export function Event({ eventData, closeModal }) {
	const { status, statusMap, updateStatus, addStatus } = useStatusContext();
	const { storage, updateItem, addItem } = useStorageContext();
	const { addButton } = useButtonContext();
	const { addRecord } = useRecordContext();
	const [description, setDescription] = useState([]);

	useEffect(() => {
		setDescription(eventData.description.split("&&\n"));
	}, [eventData]);

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

		addRecord(eventData.record);
	}

	return (
		<>
			{description.map((text, index) => (
				<p key={index}>{text.trim()}</p>
			))}

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
