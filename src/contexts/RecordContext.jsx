import { createContext, useContext } from "react";
import { useRecords } from "../hooks/useRecords";
import { handleContextError } from "./contextError";

const RecordContext = createContext();

export function RecordContextProvider({ children }) {
	const { records, addRecord } = useRecords();

	return (
		<RecordContext.Provider value={{ records, addRecord }}>
			{children}
		</RecordContext.Provider>
	);
}

export function useRecordContext() {
	const context = useContext(RecordContext);

	if (!context) return handleContextError("Record");

	return context;
}
