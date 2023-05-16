import { createContext, useContext } from "react";
import { useButtons } from "../components/hooks/useButtons";

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

	if (!context) throw new Error("Esse contexto não está disponível.");

	return context;
}
