import { createContext, useContext, useState } from "react";

const LayoutEffectsContext = createContext();

export function LayoutEffectsContextProvider({ children }) {
	const [isSaving, setIsSaving] = useState(false);
	const [fadeConfig, setFadeConfig] = useState({
		isVisible: true,
		display: false, // default true
		timeout: 500,
	});

	return (
		<LayoutEffectsContext.Provider value={{ isSaving, setIsSaving, fadeConfig, setFadeConfig }}>
			{children}
		</LayoutEffectsContext.Provider>
	);
}

export function useLayoutEffectsContext() {
	const context = useContext(LayoutEffectsContext);

	if (!context) throw new Error("Esse contexto não está disponível.");

	return context;
}
