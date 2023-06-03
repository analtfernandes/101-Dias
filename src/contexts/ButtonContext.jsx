import { createContext, useContext } from "react";
import { useButtons } from "../components/hooks/useButtons";
import { handleContextError } from "./contextError";

const ButtonContext = createContext();

export function ButtonContextProvider({ children }) {
	const { buttons, addButton, removeButton } = useButtons();

	return (
		<ButtonContext.Provider value={{ buttons, addButton, removeButton }}>
			{children}
		</ButtonContext.Provider>
	);
}

export function useButtonContext() {
	const context = useContext(ButtonContext);

	if (!context) return handleContextError("Button");

	return context;
}
