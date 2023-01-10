import { createContext, useContext, useState } from "react";

const LayoutEffectsContext = createContext();

export function LayoutEffectsContextProvider({ children }) {
	const [isSaving, setIsSaving] = useState(false);

	return (
		<LayoutEffectsContext.Provider value={{ isSaving, setIsSaving }}>
			{children}
		</LayoutEffectsContext.Provider>
	);
}

export function useLayoutEffectsContext() {
	const context = useContext(LayoutEffectsContext);

	if (!context) throw new Error("Esse contexto não está disponível.");

	return context;
}
