import { STATUS_KEYS, STORAGE_KEYS } from "../components/enums";

const events = {
	1: {
		2: {
			description: `Vasculhando pelo sótão, você encontrou,
                dentro de uma caixa, alguns livros e latas de comida.`,
			consequences: [
				{ key: STORAGE_KEYS.food, value: +2 },
				{ key: STORAGE_KEYS.books, value: +6 },
				{ key: STATUS_KEYS.mental, value: +1 },
			],
		},
	},
};

export { events };
