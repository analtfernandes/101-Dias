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

function map(data, collectionName) {
	return freezeMap(new Map(data), collectionName);
}

const format = {
	map,
};

export { format };
