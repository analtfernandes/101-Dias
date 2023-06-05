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

	function applyConsequences() {
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

	function closeEventModal() {
		closeModal();
		applyConsequences();
		addRecord(eventData.record);
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
