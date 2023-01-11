import { useReducer } from "react";
import { storageMap } from "../../database";
import { STORAGE_KEYS } from "../enums";

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

function getInitialItems() {
	const currentItems = [];
	const localStorageData =
		JSON.parse(localStorage.getItem("gameData"))?.storage || [];

	if (localStorageData.length === 0) {
		const itemsKey = [STORAGE_KEYS.food, STORAGE_KEYS.health];

		for (const key of itemsKey) {
			const { initialQuantity: quantity, ...data } = storageMap.get(key);
			currentItems.push({ ...data, quantity, key });
		}

		return currentItems;
	}

	for (const { key, quantity } of localStorageData) {
		const { initialQuantity, ...data } = storageMap.get(key);
		currentItems.push({ ...data, quantity, key });
	}

	return currentItems;
}

function useStorage() {
	const [storage, dispatch] = useReducer(reducer, getInitialItems());

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
