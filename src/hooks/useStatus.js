import { useReducer } from "react";
import { statusEntity } from "../database";
import { useLocalStorage } from "./useLocalStorage";
import { updateStatusFunctions } from "../utils";

const { map: statusMap } = statusEntity;

function reducer(status, action) {
	if (action.do === "set") {
		return {
			...action.data,
		};
	}

	if (action.do === "set_value") {
		return {
			...status,
			[action.state]: action.value,
		};
	}

	if (action.do === "update") {
		const functionName = `update_${action.state}`;

		if (!updateStatusFunctions[functionName]) return { ...status };

		const updatedStatus = updateStatusFunctions[functionName]({
			status,
			value: action.value,
		});

		return {
			...status,
			...updatedStatus,
		};
	}

	if (action.do === "add") {
		if (!statusMap.has(action.key)) return { ...status };

		const { initial } = statusMap.get(action.key);

		return {
			...status,
			[action.key]: initial + action.value,
		};
	}
}

function getInitialStatus(localStorageHook) {
	const { storage, ...status } = localStorageHook.getData();

	if (status.pet) return { ...status, pet: status.pet.count };
	if (status.day) return status;

	const data = {
		time: 0,
		day: 1,
		written: 0,
		physical: 0,
		hungry: 0,
		mental: 50,
		unhealth: 0,
	};

	localStorageHook.update(data);

	return data;
}

function useStatus() {
	const localStorage = useLocalStorage();
	const [status, dispatch] = useReducer(
		reducer,
		getInitialStatus(localStorage)
	);

	function setStatus(data) {
		return dispatch({ do: "set", data });
	}

	function setStatusValue({ state, value }) {
		return dispatch({ do: "set_value", state, value });
	}

	function updateStatus({ state, value }) {
		return dispatch({ do: "update", state, value });
	}

	function addStatus({ key, value }) {
		return dispatch({ do: "add", key, value });
	}

	return {
		status,
		statusMap,
		setStatus,
		setStatusValue,
		updateStatus,
		addStatus,
	};
}

export { useStatus };
