import { useReducer } from "react";
import { storageEntity } from "../database";
import { STORAGE_KEYS } from "../components/enums";
import { useLocalStorage } from "./useLocalStorage";

const { map: storageMap } = storageEntity;

function reducer(storage, action) {
	if (action.do === "add") {
		const { initialQuantity, ...data } = storageMap.get(action.key);
		const updatedStorage = [
			...storage,
			{ ...data, quantity: initialQuantity + action.value, key: action.key },
		];
		return updatedStorage;
	}

	if (action.do === "remove") {
		const updatedStorage = storage.filter(({ key }) => key !== action.key);
		return updatedStorage;
	}

	if (action.do === "update") {
		const item = storage.find(({ key }) => key === action.key);

		if (!item) return [...storage];

		item.quantity =
			item.quantity + action.value <= 0 ? 0 : item.quantity + action.value;

		return [...storage];
	}
}

function getInitialItems(localStorageHook) {
	const currentItems = [];
	let { storage } = localStorageHook.getData();

	if (!storage || storage.length < 2) {
		const data = {
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

		storage = data.storage;

		localStorageHook.update(data);
	}

	for (const { key, quantity } of storage) {
		const { initialQuantity, ...data } = storageMap.get(key);
		currentItems.push({ ...data, quantity, key });
	}

	return currentItems;
}

function useStorage() {
	const localStorage = useLocalStorage();
	const [storage, dispatch] = useReducer(
		reducer,
		getInitialItems(localStorage)
	);

	function addItem({ key, value }) {
		return dispatch({ do: "add", key, value });
	}

	function removeItem({ key }) {
		return dispatch({ do: "remove", key });
	}

	function updateItem({ key, value }) {
		return dispatch({ do: "update", key, value });
	}

	return { storage, addItem, removeItem, updateItem };
}

export { useStorage };
