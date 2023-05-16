import { createContext, useContext } from "react";
import { useRecords } from "../components/hooks/useRecords";

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

	if (!context) throw new Error("Esse contexto não está disponível.");

	return context;
}
