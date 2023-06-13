import { STATUS_KEYS, STORAGE_KEYS } from "../enums";

const events = {
	1: {
		240: {
			description: `Revirando as gavetas de seu quarto e cozinha, você encontrou livros.`,
			consequences: [
				{ key: STATUS_KEYS.time, value: 30 },
				{ key: STORAGE_KEYS.books, value: 3 },
				{ key: STATUS_KEYS.read, value: 0 },
			],
			record: {
				text: `Você encontrou livros ao revirar as gavetas da casa.`,
			},
		},
	},
	3: {
		600: {
			description: `Você ouviu um barulho no porão. Ao investigar, viu um vulto saindo correndo 
			e sumindo em meio às caixas.&&\nNada achou ao procurar pelo ser novamente.`,
			consequences: [{ key: STATUS_KEYS.time, value: 30 }],
			record: {
				text: `Nada encontrou ao investigar um barulho no porão.`,
			},
		},
	},
	4: {
		60: {
			description: `Como no dia anterior, você ouviu um barulho no porão. Mesmo com passos silenciosos, 
			você não conseguiu supreender aquele animal misterioso que fugiu novamente.`,
			consequences: [{ key: STATUS_KEYS.time, value: 30 }],
			record: {
				text: `Ao investigar um barulho no porão, seu visitante misterioso conseguiu fugir novamente.`,
			},
		},
	},
	5: {
		480: {
			description: `Sem surpresa, você ouviu um barulho no porão. Dessa vez, entretanto, você conseguiu ser 
			sorrateiro o suficiente para conseguir ao menos reconhecer o animal antes que ele fugisse: um gato!
			&&\nAnimado por ver uma forma de vida que não fosse um rato, você deixou um pouco de comida para ele.`,
			consequences: [
				{ key: STATUS_KEYS.time, value: 30 },
				{ key: STORAGE_KEYS.food, value: -1 },
			],
			record: {
				text: `Você deixou um pouco de comida para o gato no porão.`,
			},
		},
	},
	6: {
		840: {
			description: `Mesmo sem nenhum barulho no porão, você decidiu deixar um pouco de comida para o seu visitante, 
			já que, nessa manhã, a comida deixada ontem havia desaparecido.`,
			consequences: [
				{ key: STATUS_KEYS.time, value: 30 },
				{ key: STORAGE_KEYS.food, value: -1 },
			],
			record: {
				text: `Você deixou mais comida para o gato no porão.`,
			},
		},
	},
	7: {
		780: {
			description: `Ao ir no porão deixar comida para o gato novamente, você se deparou com o pequeno animal de 
			pelagem preta sentado sobre as caixas a lhe observar. Logo se alisando em suas pernas, 
			você percebeu que ganhou um novo amigo.`,
			consequences: [
				{ key: STATUS_KEYS.time, value: 30 },
				{ key: STATUS_KEYS.pet, value: 0 },
			],
			record: {
				text: `Você fez um novo amigo.`,
			},
		},
	},
	13: {
		60: {
			description: `Ao procurar por um antigo porta-retratos que ainda estava em sua mala, você encontrou 
			um velho rádio à pilha.`,
			consequences: [
				{ key: STATUS_KEYS.time, value: 30 },
				{ key: STORAGE_KEYS.battery, value: 2 },
				{ key: STORAGE_KEYS.radio, value: 1 },
			],
			record: {
				text: `Você encontrou um rádio.`,
			},
		},
	},
};

const choiceEventsConsequences = {
	1115: [
		{
			description: `Você voltou em segurança de sua expedição.`,
			consequences: [
				{ key: STORAGE_KEYS.food, value: "random", min: 5, max: 10 },
				{ key: STORAGE_KEYS.health, value: "random", min: 3, max: 7 },
				{ key: STORAGE_KEYS.battery, value: "random", min: 3, max: 5 },
				{ key: STORAGE_KEYS.map, value: -1 },
				{ key: STATUS_KEYS.hungry, value: "random", min: 1, max: 3 },
				{ key: STATUS_KEYS.mental, value: 1 },
				{ key: STATUS_KEYS.unhealth, value: "random", min: 0, max: 1 },
				{ key: STATUS_KEYS.time, value: "random", min: 120, max: 180 },
			],
			record: {
				text: `Você voltou em segurança de sua expedição.`,
			},
		},
	],
	1150: [
		{
			description: `Você conseguiu consertar o rádio!`,
			consequences: [],
			record: {
				text: `Você consertou o rádio.`,
			},
		},
		{
			description: `Você infelizmente não conseguiu consertar o rádio.`,
			consequences: [{ key: STORAGE_KEYS.radio, value: -1 }],
			record: {
				text: `Você não conseguiu consertar o rádio.`,
			},
		},
	],
	2150: [
		{
			description: `Você não consertou o rádio.`,
			consequences: [{ key: STORAGE_KEYS.radio, value: -1 }],
			record: {
				text: `Você não consertou o rádio.`,
			},
		},
	],
	1122: [
		{
			description: `Uma pequena família estava à sua porta: buscavam abrigo temporário. 
			Alegando que ficariam apenas algumas horas, você os deixou ficar. Como agradecimento, 
			eles lhe deram alguns suprimentos.`,
			consequences: [
				{ key: STORAGE_KEYS.food, value: "random", min: 2, max: 5 },
				{ key: STORAGE_KEYS.health, value: "random", min: 1, max: 2 },
				{ key: STORAGE_KEYS.battery, value: "random", min: 1, max: 3 },
				{ key: STORAGE_KEYS.map, value: 1 },
			],
			record: {
				text: `Você ganhou suprimentos ao ajudar uma pequena família.`,
			},
		},
		{
			description: `Enquanto você abria a porta, duas mãos a empurraram com força. 
			Após revirarem sua casa, as pessoas se foram.`,
			consequences: [
				{ key: STORAGE_KEYS.food, value: "random", min: -2, max: -7 },
				{ key: STORAGE_KEYS.health, value: -1 },
				{ key: STATUS_KEYS.unhealth, value: "random", min: 1, max: 2 },
			],
			record: {
				text: `Pessoas invadiram sua casa e roubaram seus suprimentos.`,
			},
		},
	],
	2122: [
		{
			description: `Percebendo que você não abriria a porta, a pessoa a arrombou. 
			Você se escondeu, mas isso não foi o suficiente: você foi descoberto.`,
			consequences: [
				{ key: STORAGE_KEYS.food, value: "random", min: -3, max: -10 },
				{ key: STORAGE_KEYS.health, value: "random", min: 0, max: -2 },
				{ key: STORAGE_KEYS.map, value: -1 },
				{ key: STATUS_KEYS.unhealth, value: "random", min: 1, max: 3 },
			],
			record: {
				text: `Pessoas invadiram sua casa e roubaram seus suprimentos.`,
			},
		},
	],
	1137: [
		{
			description: `Ao telefone, sua irmã mais nova, Duda, lhe informou que passava bem, 
			assim como alguns de seus primos e tia. Entretanto, nada sabia de sua mãe.`,
			consequences: [{ key: STATUS_KEYS.mental, value: 3 }],
			record: {
				text: `Pelo telefone, você soube que seus parentes estão bem.`,
			},
		},
	],
	1173: [
		{
			description: `Ao telefone, Leonardo, melhor amigo de seu irmão, lhe contou da grave 
			enfermidade deste. O estado era sério, entretanto, não fatal. Enquanto ele lhe passava 
			outras informações, a ligação caiu.`,
			consequences: [{ key: STATUS_KEYS.mental, value: 2 }],
			record: {
				text: `Pelo telefone, você soube do estado grave de seu irmão.`,
			},
		},
	],
	1118: [
		{
			description: `Ao telefone, apenas o chiado.`,
			consequences: [{ key: STATUS_KEYS.mental, value: -2 }],
			record: {
				text: `Atendendo ao telefone, você ouviu apenas o chiado.`,
			},
		},
	],
	1148: [
		{
			description: `Ao telefone, apenas uma respiração pesada. Nenhuma de suas perguntas foi respondida. 
			Eventualmente, desligou.`,
			consequences: [{ key: STATUS_KEYS.mental, value: -3 }],
			record: {
				text: `Atendendo ao telefone, você ouviu apenas uma respiração pesada.`,
			},
		},
	],
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
