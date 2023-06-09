import { useEffect, useState } from "react";
import { storageEntity } from "../../database";
import {
	useButtonContext,
	useRecordContext,
	useStatusContext,
	useStorageContext,
} from "../../contexts";
import { Buttons } from "./Modal.jsx";

const { map: storageMap } = storageEntity;

export function Event({ eventData, closeModal }) {
	const [description, setDescription] = useState([]);
	const { status, statusMap, updateStatus, addStatus } = useStatusContext();
	const { storage, updateItem, addItem } = useStorageContext();
	const { addButton } = useButtonContext();
	const { addRecord } = useRecordContext();

	useEffect(() => {
		setDescription(eventData.description.split("&&\n"));
	}, [eventData]);

	function keyExist(key) {
		return storageMap.has(key) || statusMap.has(key);
	}

	function getEventConsequence({ eventKey, value }) {
		if (value === 0 || !keyExist(eventKey)) return {};

		const newValue = value < 0 ? value.toString() : `+${value}`;
		const { description } = storageMap.get(eventKey) || statusMap.get(eventKey);

		return { description, newValue };
	}

	function upsertStatus({ key, value }, newData) {
		if (status[key]) {
			updateStatus({ state: key, value });
			newData[key] = status[key] + value;
			return;
		}

		addStatus({ key, value });
		addButton({ key });
		newData[key] = value;
	}

	function upsertStorage({ key, value }, newData) {
		const hasKey = storage.find((storage) => storage.key === key);

		if (hasKey) {
			const item = newData.storage.find((storage) => storage.key === key);
			item.quantity += value;

			updateItem({ key, value });

			return;
		}

		addItem({ key, value });
		newData.storage.push({ key, quantity: value });
	}

	function applyConsequences() {
		const newData = { storage: storage.map(({ key, quantity }) => ({ key, quantity })) };

		for (const consequence of eventData.consequences) {
			if (statusMap.has(consequence.key)) {
				upsertStatus(consequence, newData);
			}

			if (storageMap.has(consequence.key)) {
				upsertStorage(consequence, newData);
			}
		}

		return newData;
	}

	function closeEventModal() {
		const newData = applyConsequences();
		addRecord(eventData.record);
		closeModal(null, newData);
	}

	return (
		<>
			{description.map((text, index) => (
				<p key={index}>{text.trim()}</p>
			))}

			<div>
				{eventData.consequences.map(({ key: eventKey, value }, index) => {
					const { description, newValue } = getEventConsequence({
						eventKey,
						value,
					});

					if (!description) return;

					return (
						<span key={index}>
							{description}: {newValue}
						</span>
					);
				})}
			</div>

			<Buttons maxWidth="100%">
				<button onClick={closeEventModal}>OK</button>
			</Buttons>
		</>
	);
}
