import { createContext, useContext } from "react";
import { useStorage } from "../components/hooks/useStorage";

const StorageContext = createContext();

export function StorageContextProvider({ children }) {
	const { storage, addItem, removeItem, updateItem } = useStorage();

	return (
		<StorageContext.Provider
			value={{ storage, addItem, removeItem, updateItem }}
		>
			{children}
		</StorageContext.Provider>
	);
}

export function useStorageContext() {
	const context = useContext(StorageContext);

	if (!context) throw new Error("Esse contexto não está disponível.");

	return context;
}
