import { STATUS_KEYS, STORAGE_KEYS } from "../components/enums";

const events = {
	1: {
		2: {
			description: `No porão, você percebeu algumas caixas caídas, 
				a provável origem do barulho. Ao recolhê-lhas, você encontrou 
				algumas latas de comidas.`,
			consequences: [{ key: STORAGE_KEYS.food, value: +8 }],
		},
		20: {
			description: `Vasculhando pelo sótão, você encontrou,
                dentro de uma caixa, alguns livros e latas de comida.`,
			consequences: [
				{ key: STORAGE_KEYS.food, value: +2 },
				{ key: STORAGE_KEYS.books, value: +6 },
				{ key: STATUS_KEYS.mental, value: +1 },
				{ key: STATUS_KEYS.read, value: +0 },
			],
		},
	},
};

const choiceEvents = {
	1: {
		2: {
			title: "Barulho no porão",
			description: `Enquanto mergulhava em seus pensamentos, 
				você ouviu um barulho vindo do porão.`,
			buttons: [
				{
					text: "Investigar",
					onClick: {
						event: events[1][2],
					},
				},
				{
					text: "Ignorar",
					onClick: {
						event: null,
					},
				},
			],
		},
	},
};

export { events, choiceEvents };
