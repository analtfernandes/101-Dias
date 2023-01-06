import { useReducer } from "react";
import { statusMap } from "../../database";

function sort() {
	return Math.random() - 0.5;
}

function update_time({ status, value }) {
	const time = status.time + value;
	return { time };
}

function update_written({ status, value }) {
	const sortNumber = sort();

	let written = status.written + value;
	let hungry = status.hungry;
	let mental = status.mental;

	if (written % 100 === 0 && sortNumber > 0) {
		hungry = status.hungry + 1;
	}

	if (status.written - status.physical >= 100) {
		if (status.mental > 20 && status.written % 3 === 0) {
			mental = status.mental - 1;
		}
	} else if (status.mental < 80 && status.written % 10 === 0) {
		mental = status.mental + 1;
	}

	return { written, hungry, mental };
}

function update_hungry({ status, value }) {
	if (status.hungry + value <= 0) {
		value = 0 - status.hungry;
	} else if (status.hungry <= 7) {
		value = -4;
	} else {
		value = -3;
	}

	let hungry = status.hungry + value;
	let mental = status.mental;

	if (value !== 0) {
		if (status.mental < 80) {
			mental = status.mental + 1;
		}

		//changeStorage({ change:{ id:1, value:value } });
	}

	return { hungry, mental };
}

function update_physical({ status, value }) {
	const sortNumber = sort();

	let physical = status.physical + value;
	let hungry = status.hungry;
	let mental = status.mental;

	if (physical % 50 === 0 && sortNumber > 0) {
		hungry = status.hungry + 1;
	}

	if (status.physical - status.written >= 100) {
		if (status.mental > 20 && status.physical % 3 === 0) {
			mental = status.mental - 1;
		}
	} else if (status.mental < 80 && status.physical % 10 === 0) {
		mental = status.mental + 1;
	}

	return { physical, hungry, mental };
}

function update_mental({ status, value }) {
	const mental = status.mental + value;
	return { mental };
}

const statesFunctions = {
	update_time,
	update_written,
	update_hungry,
	update_physical,
	update_mental,
};

function reducer(status, action) {
	if (action.do === "set") {
		return {
			...action.data,
		};
	}

	if (action.do === "update") {
		const functionName = `update_${action.state}`;
		const updatedStatus = statesFunctions[functionName]({
			status,
			value: action.value,
		});

		return {
			...status,
			...updatedStatus,
		};
	}
}

function useStatus(initialState = {}) {
	const [status, dispatch] = useReducer(reducer, initialState);

	function setStatus(data) {
		return dispatch({ do: "set", data });
	}

	function updateStatus({ state, value }) {
		return dispatch({ do: "update", state, value });
	}

	return { status, statusMap, setStatus, updateStatus };
}

export { useStatus };
