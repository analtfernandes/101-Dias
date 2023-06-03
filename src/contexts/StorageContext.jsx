import { createContext, useContext } from "react";
import { useStorage } from "../hooks/useStorage";
import { handleContextError } from "./contextError";

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

	if (!context) return handleContextError("Storage");

	return context;
}
