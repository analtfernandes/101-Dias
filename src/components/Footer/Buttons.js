import { useStatusContext } from "../../contexts";

let arrayButtons = [
	{
		text: "Escrever",
		states: [
			{ state: "time", value: 1 },
			{ state: "written", value: 1 },
		],
		disabled: false,
	},
	{
		text: "Alimentar-se",
		states: [{ state: "hungry", value: -5 }],
		disabled: false,
	},
	{
		text: "Exercitar-se",
		states: [
			{ state: "time", value: 1 },
			{ state: "physical", value: 1 },
		],
		disabled: false,
	},
	{
		text: "Dormir",
		disabled: true,
	},
];

function Buttons() {
	const { status } = useStatusContext();

	if (status.time === 960) {
		arrayButtons = arrayButtons.map((button) => ({
			...button,
			disabled: !button.disabled,
		}));
	}
}

export { arrayButtons, Buttons };
