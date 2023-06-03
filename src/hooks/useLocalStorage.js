function useLocalStorage() {
	const storageKey = "101-dias";

	function set(data) {
		localStorage.setItem(storageKey, stringify(data));
	}

	function update(data) {
		const storage = getData();
		set({ ...storage, ...data });
	}

	function clear() {
		localStorage.removeItem(storageKey);
	}

	function getData() {
		return parse(localStorage.getItem(storageKey));
	}

	function parse(data = {}) {
		return JSON.parse(data || "{}");
	}

	function stringify(data) {
		return JSON.stringify(data);
	}

	return { set, update, clear, getData };
}

export { useLocalStorage };
