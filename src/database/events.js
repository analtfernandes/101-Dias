import { STATUS_KEYS, STORAGE_KEYS } from "../enums";

const events = {
	1: {
		20: {
			description: `No porão, você percebeu algumas caixas caídas, 
				a provável origem do barulho.&&\nAo recolhê-lhas, você encontrou 
				algumas latas de comidas.`,
			consequences: [{ key: STORAGE_KEYS.food, value: +8 }],
			record: {
				text: `Você encontrou latas de comida em caixas caídas ao
					investigar um barulho no porão.`,
			},
		},
		22: {
			description: `Vasculhando pelo sótão, você encontrou,
                dentro de uma caixa, alguns livros e latas de comida.`,
			consequences: [
				{ key: STORAGE_KEYS.food, value: +2 },
				{ key: STORAGE_KEYS.books, value: +6 },
				{ key: STATUS_KEYS.mental, value: +1 },
				{ key: STATUS_KEYS.read, value: +0 },
			],
			record: { text: "Você encontrou livros e comida explorando o sótão." },
		},
	},
};

const choiceEvents = {
	1: {
		20: {
			title: "Barulho no porão",
			description: `Enquanto mergulhava em seus pensamentos,&&\n
				você ouviu um barulho vindo do porão.`,
			buttons: [
				{
					text: "Investigar",
					onClick: {
						event: events[1][20],
						record: events[1][20].record,
					},
				},
				{
					text: "Ignorar",
					onClick: {
						event: null,
						record: {
							text: "Você ouviu um barulho vindo do porão, e ignorou.",
						},
					},
				},
			],
		},
	},
};

export { events, choiceEvents };
