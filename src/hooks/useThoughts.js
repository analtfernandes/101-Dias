import { thoughts } from "../database";
import { generateRandomInt } from "../utils";

function useThoughts() {
	function isLuck() {
		const randomInt = generateRandomInt(1, 100);
		return randomInt === 7;
	}

	function get() {
		if (!isLuck()) return null;

		const index = generateRandomInt(0, thoughts.length);
		return thoughts[index];
	}

	return { get };
}

export { useThoughts };
