import styled from "styled-components";

import { useLayoutEffectsContext, useStatusContext } from "../../contexts";
import { STATUS_KEYS } from "../enums";
import { useSave } from "../hooks/useSave";

export default function Button({ text, states, disabled, buttonKey: key }) {
	const { status, updateStatus, setStatusValue } = useStatusContext();
	const { setFadeConfig } = useLayoutEffectsContext();
	const saveGame = useSave();
	const isSleepButton = key === STATUS_KEYS.sleep;

	function updateStatusFunction() {
		for (let i = 0; i < states.length; i++) {
			updateStatus({ state: states[i].state, value: states[i].value });
		}
	}

	function sleep() {
		setFadeConfig({
			await: true,
			display: true,
			custom: true,
		});

		const updateStatusCallback = () => {
			setStatusValue({ state: STATUS_KEYS.time, value: 0 });
			updateStatus({ state: STATUS_KEYS.day, value: 1 });
		};

		const saveGameProps = {
			callback: updateStatusCallback,
			customStatus: { time: 0, day: status.day + 1 },
		};

		setTimeout(() => {
			saveGame(saveGameProps).then(() =>
				setFadeConfig({
					await: true,
					display: true,
					isVisible: true,
					custom: true,
					timeout: 1000,
				})
			);
		}, 1500);
	}

	return (
		<Wrapper
			disabled={disabled}
			onClick={isSleepButton ? sleep : updateStatusFunction}
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

	${(props) =>
		props.disabled
			? `
            filter: brightness(0.5);
        `
			: `
            &:hover {
                filter: brightness(0.8);
                cursor: pointer;
            }

            &:active {
                filter: brightness(0.8);
                transform: translateY(1px);
            }
        `}
`;
