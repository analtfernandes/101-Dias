import { createContext, useContext } from "react";
import { useStatus } from "../hooks/useStatus";
import { handleContextError } from "./contextError";

const StatusContext = createContext();

export function StatusContextProvider({ children }) {
	const { status, statusMap, setStatusValue, updateStatus, addStatus } =
		useStatus();

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
