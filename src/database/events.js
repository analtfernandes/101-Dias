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

const randomEvents = [
	{
		description: `Vasculhando pelo sótão, você encontrou alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.food, value: "random", min: 1, max: 4 },
			{ key: STORAGE_KEYS.health, value: "random", min: 1, max: 2 },
			{ key: STORAGE_KEYS.battery, value: "random", min: 1, max: 3 },
		],
		record: {
			text: `Você encontrou latas de comida, medicamentos e pilhas ao vasculhar o sótão.`,
		},
	},
	{
		description: `Vasculhando pelo sótão, você encontrou alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.food, value: "random", min: 2, max: 10 },
		],
		record: {
			text: `Você encontrou latas de comida ao vasculhar o sótão.`,
		},
	},
	{
		description: `Vasculhando pelo sótão, você encontrou alguns suprimentos.`,
		consequences: [{ key: STORAGE_KEYS.map, value: 1 }],
		record: {
			text: `Você encontrou um mapa ao vasculhar o sótão.`,
		},
	},
	{
		description: `Vasculhando pelo sótão, você encontrou alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.books, value: "random", min: 2, max: 5 },
		],
		record: {
			text: `Você encontrou livros ao vasculhar o sótão.`,
		},
	},
	{
		description: `Vasculhando pelo sótão, você encontrou alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.battery, value: "random", min: 2, max: 3 },
		],
		record: {
			text: `Você encontrou pilhas ao vasculhar o sótão.`,
		},
	},
	{
		description: `Vasculhando pelo porão, você encontrou alguns suprimentos.`,
		consequences: [{ key: STORAGE_KEYS.map, value: 1 }],
		record: {
			text: `Você encontrou um mapa ao vasculhar o porão.`,
		},
	},
	{
		description: `Vasculhando pelo porão, você encontrou alguns suprimentos.`,
		consequences: [{ key: STORAGE_KEYS.food, value: "random", min: 2, max: 5 }],
		record: {
			text: `Você encontrou latas de comida ao vasculhar o porão.`,
		},
	},
	{
		description: `Vasculhando pelo porão, você encontrou alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.battery, value: "random", min: 1, max: 3 },
		],
		record: {
			text: `Você encontrou pilhas ao vasculhar o porão.`,
		},
	},
	{
		description: `Vasculhando pelo porão, você encontrou alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.food, value: "random", min: 1, max: 3 },
			{ key: STORAGE_KEYS.health, value: "random", min: 1, max: 3 },
		],
		record: {
			text: `Você encontrou latas de comida e medicamentos ao vasculhar o porão.`,
		},
	},
	{
		description: `Vasculhando pelo porão, você encontrou alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.books, value: "random", min: 2, max: 4 },
		],
		record: {
			text: `Você encontrou livros ao vasculhar o porão.`,
		},
	},
	{
		description: `Vasculhando pela casa, você encontrou alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.food, value: "random", min: 1, max: 2 },
			{ key: STORAGE_KEYS.map, value: 1 },
		],
		record: {
			text: `Você encontrou latas de comida e um mapa ao vasculhar a casa.`,
		},
	},
	{
		description: `Vasculhando pela casa, você encontrou alguns suprimentos.`,
		consequences: [{ key: STORAGE_KEYS.health, value: 1 }],
		record: {
			text: `Você encontrou medicamentos ao vasculhar a casa.`,
		},
	},
	{
		description: `Vasculhando pela casa, você encontrou alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.battery, value: "random", min: 1, max: 3 },
		],
		record: {
			text: `Você encontrou pilhas ao vasculhar a casa.`,
		},
	},
	{
		description: `Vasculhando pela casa, você encontrou alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.coffee, value: "random", min: 1, max: 3 },
		],
		record: {
			text: `Você encontrou café ao vasculhar a casa.`,
		},
	},
	{
		description: `Sem que você percebesse, um rato invadiu seu armazém.`,
		consequences: [
			{ key: STORAGE_KEYS.food, value: "random", min: 0, max: -5 },
		],
		record: {
			text: `Seus alimentos foram devorados por ratos.`,
		},
	},
	{
		description: `Sem que você percebesse, um rato invadiu seu armazém.`,
		consequences: [
			{ key: STORAGE_KEYS.food, value: "random", min: 0, max: -5 },
			{ key: STORAGE_KEYS.map, value: "random", min: 0, max: -2 },
			{ key: STORAGE_KEYS.book, value: "random", min: 0, max: -3 },
		],
		record: {
			text: `Seus alimentos, mapas e livros foram devorados por ratos.`,
		},
	},
	{
		description: `Um problema no encanamento fez com que você perdesse alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.battery, value: "random", min: 0, max: -3 },
			{ key: STORAGE_KEYS.map, value: "random", min: 0, max: -2 },
			{ key: STORAGE_KEYS.book, value: "random", min: 0, max: -4 },
		],
		record: {
			text: `Suas pilhas, mapas e livros foram arruinados pela água.`,
		},
	},
	{
		description: `Você estava reorganizando seu armazém quando, em um acidente, perdeu alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.food, value: "random", min: -1, max: -5 },
			{ key: STORAGE_KEYS.book, value: "random", min: 0, max: -2 },
		],
		record: {
			text: `Você perdeu alguns de seus alimentos e livros em um acidente.`,
		},
	},
	{
		description: `Um grupo de cupins te fez perder alguns suprimentos.`,
		consequences: [
			{ key: STORAGE_KEYS.map, value: "random", min: 0, max: -2 },
			{ key: STORAGE_KEYS.book, value: "random", min: 0, max: -3 },
		],
		record: {
			text: `Seus mapas e livros foram arruinados por cupins.`,
		},
	},
];

export { events, choiceEvents, randomEvents };
