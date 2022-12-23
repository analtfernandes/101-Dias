import { createContext, useEffect } from "react";
import { useStatus } from "../components/hooks/useStatus";
import verifyStorage from "../components/App/verifyStorage";

export const StatusContext = createContext();

export function StatusContextProvider({ children }) {
	const { status, setStatus, updateStatus } = useStatus();

	useEffect(() => {
		const data = verifyStorage();
		setStatus(data);
	}, []);

	return (
		<StatusContext.Provider value={{ status, updateStatus }}>
			{children}
		</StatusContext.Provider>
	);
}
