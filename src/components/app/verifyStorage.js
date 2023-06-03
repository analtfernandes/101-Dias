import { storageEntity } from "../../database";
import { STORAGE_KEYS } from "../enums";

const { map: storageMap } = storageEntity;

function verifyStorage() {
	const storageData = localStorage.getItem("gameData");

	if (!storageData) {
		const data = {
			time: 0,
			day: 1,
			written: 0,
			physical: 0,
			hungry: 0,
			mental: 50,
			unhealth: 0,
			storage: [
				{
					key: STORAGE_KEYS.food,
					description: storageMap.get(STORAGE_KEYS.food).description,
					quantity: storageMap.get(STORAGE_KEYS.food).initialQuantity,
				},
				{
					key: STORAGE_KEYS.health,
					description: storageMap.get(STORAGE_KEYS.health).description,
					quantity: storageMap.get(STORAGE_KEYS.health).initialQuantity,
				},
			],
		};

		localStorage.setItem("gameData", JSON.stringify(data));

		return data;
	}

	return JSON.parse(storageData);
}

export default verifyStorage;
