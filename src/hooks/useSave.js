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

	const defaultProps = { callback: () => {}, data: {} };
	const timeoutResolve = 1000;

	return ({ callback, data } = defaultProps) => {
		return new Promise((resolve) => {
			setIsSaving(true);

			if (typeof callback === "function") {
				callback();
			}

			const formattedStorage = storage.map(({ key, quantity }) => ({
				key,
				quantity,
			}));
			const currentData = { ...status, storage: formattedStorage, ...data };
			const originalData = localStorageHook.getData();

			if (originalData.pet) {
				currentData.pet = { ...originalData.pet, count: status.pet || 0 };
			}

			localStorageHook.set(currentData);

			setTimeout(() => {
				setIsSaving(false);
				resolve({ status: "saved" });
			}, timeoutResolve);
		});
	};
}

export { useSave };
