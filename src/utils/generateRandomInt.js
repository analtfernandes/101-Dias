function generateRandomInt(min, max) {
	const isValidParams = typeof min === "number" && typeof max === "number";

	if (isValidParams) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	return Math.ceil(Math.random() - 0.5);
}

export { generateRandomInt };
