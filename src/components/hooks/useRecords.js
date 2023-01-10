import { useReducer } from "react";
import { useStatusContext } from "../../contexts";
import { ICONS_NAMES } from "../enums";

const initialRecords = [{ icon: ICONS_NAMES.sunny, text: "O dia começou" }];
const lastDayRecord = {
	icon: ICONS_NAMES.moon,
	text: "A noite chegou, hora de dormir.",
	isLast: true,
};

function reducer(records, action) {
	if (action.do === "add") {
		const newRecord = { icon: action.icon, text: action.text };
		const updatedRecords = [...records, newRecord];
		return updatedRecords;
	}

	if (action.do === "add_last") {
		const updatedRecords = [...records, lastDayRecord];
		return updatedRecords;
	}

	if (action.do === "reset") {
		return initialRecords;
	}
}

function useRecords() {
	const [records, dispatch] = useReducer(reducer, initialRecords);
	const { status } = useStatusContext();

	function addRecord({ icon = null, text }) {
		dispatch({ do: "add", icon, text });
	}

	function resetRecords() {
		dispatch({ do: "reset" });
	}

	function addLastDayRecord() {
		dispatch({ do: "add_last" });
	}

	if (status.time === 0 && records.length > 1) resetRecords();
	if (status.time === 960 && !records[records.length - 1].isLast) {
		addLastDayRecord();
	}

	return { records, addRecord };
}

export { useRecords };
