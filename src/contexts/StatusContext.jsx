import { createContext, useEffect, useContext } from "react";
import { useStatus } from "../hooks/useStatus";
import verifyStorage from "../components/app/verifyStorage";
import { handleContextError } from "./contextError";

const StatusContext = createContext();

export function StatusContextProvider({ children }) {
	const {
		status,
		statusMap,
		setStatus,
		setStatusValue,
		updateStatus,
		addStatus,
	} = useStatus();

	useEffect(() => {
		const data = verifyStorage();
		setStatus(data);
	}, []);

	return (
		<StatusContext.Provider
			value={{ status, statusMap, updateStatus, addStatus, setStatusValue }}
		>
			{children}
		</StatusContext.Provider>
	);
}

export function useStatusContext() {
	const context = useContext(StatusContext);

	if (!context) return handleContextError("Status");

	return context;
}
