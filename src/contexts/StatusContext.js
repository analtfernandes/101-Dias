import { createContext, useEffect, useContext } from "react";
import { useStatus } from "../components/hooks/useStatus";
import verifyStorage from "../components/App/verifyStorage";

const StatusContext = createContext();

export function StatusContextProvider({ children }) {
	const { status, statusMap, setStatus, updateStatus } = useStatus();

	useEffect(() => {
		const data = verifyStorage();
		setStatus(data);
	}, []);

	return (
		<StatusContext.Provider value={{ status, statusMap, updateStatus }}>
			{children}
		</StatusContext.Provider>
	);
}

export function useStatusContext() {
	const context = useContext(StatusContext);

	if (!context) throw new Error("Esse contexto não está disponível.");

	return context;
}
