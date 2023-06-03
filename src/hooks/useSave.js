import {
	useLayoutEffectsContext,
	useStatusContext,
	useStorageContext,
} from "../contexts";
import { useLocalStorage } from "./index";

function useSave() {
	const { status } = useStatusContext();
	const { storage } = useStorageContext();
	const { setIsSaving } = useLayoutEffectsContext();
	const localStorageHook = useLocalStorage();

	let timeoutResolve = 2000;

	return ({ callback, customStatus }) => {
		return new Promise((resolve) => {
			setIsSaving(true);

			if (typeof callback === "function") {
				callback();
			}

			const newStorage = storage.map(({ key, quantity }) => ({
				key,
				quantity,
			}));
			const newData = { ...status, storage: newStorage, ...customStatus };

			localStorageHook.set(newData);

			setTimeout(() => {
				setIsSaving(false);
				resolve({ status: "saved" });
			}, timeoutResolve);
		});
	};
}

export { useSave };
