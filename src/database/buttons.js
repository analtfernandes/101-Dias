const buttonsMap = Object.freeze([
	{
		key: "written",
		text: "Escrever",
		states: [
			{ state: "time", value: 1 },
			{ state: "written", value: 1 },
		],
		disabled: false,
	},
	{
		key: "hungry",
		text: "Alimentar-se",
		states: [{ state: "hungry", value: -5 }],
		disabled: false,
	},
	{
		key: "physical",
		text: "Exercitar-se",
		states: [
			{ state: "time", value: 1 },
			{ state: "physical", value: 1 },
		],
		disabled: false,
	},
	{
		key: "sleep",
		text: "Dormir",
		states: [],
		disabled: true,
	},
]);

export { buttonsMap };
