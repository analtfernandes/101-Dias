function freezeMap(map, collectionName = null) {
	const errorMessage = collectionName
		? `Object ${collectionName} is frozen!`
		: "Object is frozen!";

	const action = () => {
		throw new Error(errorMessage);
	};

	map.set = action;
	map.delete = action;
	map.clear = action;

	return map;
}

function freezeArray(data, freezeContent = true) {
	if (freezeContent) {
		for (const content of data) Object.freeze(content);
	}

	return Object.freeze(data);
}

function map(data, collectionName) {
	return freezeMap(new Map(data), collectionName);
}

const format = {
	map,
};

const freeze = {
	map: freezeMap,
	array: freezeArray,
};

export { format, freeze };
