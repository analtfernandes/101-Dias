import styled from "styled-components";

import { useLayoutEffectsContext, useStatusContext } from "../../contexts";
import { STATUS_KEYS } from "../../enums";
import { useSave } from "../../hooks";

export default function Button({ text, states, disabled, buttonKey: key }) {
	const { status, updateStatus } = useStatusContext();
	const { setFadeConfig } = useLayoutEffectsContext();
	const saveGame = useSave();

	const isSleepButton = key === STATUS_KEYS.sleep;

	function applyConsenquences() {
		for (const { state, value } of states) {
			updateStatus({ state, value });
		}
	}

	function sleep() {
		setFadeConfig({
			type: "start",
		});

		const saveGameProps = {
			callback: applyConsenquences,
			data: { time: 0, day: status.day + 1 },
		};

		setTimeout(() => {
			saveGame(saveGameProps).then(() => {
				setFadeConfig((prev) => ({
					...prev,
					type: "finish",
				}));
			});
		}, 1500);
	}

	return (
		<Wrapper
			disabled={disabled}
			onClick={isSleepButton ? sleep : applyConsenquences}
		>
			{text}
		</Wrapper>
	);
}

const Wrapper = styled.button`
	width: 130px;
	border-radius: 15px;
	padding: 5px 0;
	bottom: 0;
	background-color: #744a2d;
	border: 1px solid rgb(42 23 0);
	box-shadow: 0 1px 4px 0 rgb(0 0 0 / 50%);
	text-align: center;
	font-size: 18px;
	color: ghostwhite;

	:hover {
		filter: brightness(0.8);
		transform: translateY(1px);
		cursor: pointer;
	}

	:disabled {
		filter: brightness(0.5);
		transform: translateY(0);
		cursor: default;
	}
`;
