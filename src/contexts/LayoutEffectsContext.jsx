import { createContext, useContext, useState } from "react";
import { handleContextError } from "./contextError";

const LayoutEffectsContext = createContext();

export function LayoutEffectsContextProvider({ children }) {
	const [isSaving, setIsSaving] = useState(false);
	const [fadeConfig, setFadeConfig] = useState({
		isVisible: false, // default: true
		display: false, // default: true
		type: "", // default: "initial"
	});

	return (
		<LayoutEffectsContext.Provider
			value={{ isSaving, setIsSaving, fadeConfig, setFadeConfig }}
		>
			{children}
		</LayoutEffectsContext.Provider>
	);
}

export function useLayoutEffectsContext() {
	const context = useContext(LayoutEffectsContext);

	if (!context) return handleContextError("Layout Effects");

	return context;
}
