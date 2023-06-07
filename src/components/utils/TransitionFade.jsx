import styled from "styled-components";
import { useLayoutEffectsContext } from "../../contexts";

export function TransitionFade() {
	const { fadeConfig, setFadeConfig } = useLayoutEffectsContext();

	function setInitialFade() {
		setFadeConfig((prev) => ({
			...prev,
			isVisible: true,
			display: true,
			type: "",
		}));

		setTimeout(() => {
			setFinishFade();
		}, fadeConfig.timeout || 1000);
	}

	function setDefaultFade() {
		setStartFade();

		setTimeout(() => {
			setFinishFade();
		}, fadeConfig.timeout || 3000);
	}

	function setStartFade() {
		setFadeConfig((prev) => ({
			...prev,
			display: true,
			type: "",
		}));

		setTimeout(() => {
			setFadeConfig((prev) => ({
				...prev,
				isVisible: true,
			}));
		}, 20);
	}

	function setFinishFade() {
		setFadeConfig((prev) => ({
			...prev,
			isVisible: false,
			type: "",
		}));

		setTimeout(() => {
			setFadeConfig((prev) => ({
				...prev,
				display: false,
			}));
		}, fadeConfig.timeout + 1500 || 2000);
	}

	if (fadeConfig.type === "initial") setInitialFade();
	if (fadeConfig.type === "default") setDefaultFade();
	if (fadeConfig.type === "start") setStartFade();
	if (fadeConfig.type === "finish") setFinishFade();

	return (
		<Fade
			visible={fadeConfig.isVisible ? "1" : "0"}
			display={fadeConfig.display ? "initial" : "none"}
		/>
	);
}

const Fade = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: ${(props) => props.visible};
	position: fixed;
	z-index: 2;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: ${(props) => props.display};
	transition: all 1.5s linear;
`;
