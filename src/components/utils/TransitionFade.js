import styled from "styled-components";

export function TransitionFade({ fadeConfig, setFadeConfig }) {
	function initFade() {
		setFadeConfig((prev) => ({ ...prev, init: false }));

		setTimeout(() => {
			setFadeConfig((prev) => ({ ...prev, isVisible: true }));
		}, 20);
	}

	function setDefaultFade() {
		setTimeout(() => {
			setFadeConfig((prev) => ({ ...prev, isVisible: false }));
		}, fadeConfig.timeout || 2000);

		setTimeout(() => {
			setFadeConfig((prev) => ({ ...prev, display: false }));
		}, fadeConfig.timeout + 1500 || 3000);
	}

	function setCustomFade() {
		if (fadeConfig.isVisible) {
			setFadeConfig((prev) => ({
				...prev,
				isVisible: false,
				await: false,
			}));

			setTimeout(() => {
				setFadeConfig((prev) => ({
					...prev,
					display: false,
				}));
			}, fadeConfig.timeout + 1000 || 2000);
		} else {
			setTimeout(() => {
				setFadeConfig((prev) => ({
					...prev,
					isVisible: true,
					await: false,
				}));
			}, 20);
		}
	}

	if (!fadeConfig.await && fadeConfig.init && !fadeConfig.custom) initFade();
	if (!fadeConfig.await && fadeConfig.isVisible && !fadeConfig.custom) {
		setDefaultFade();
	}
	if (fadeConfig.await && fadeConfig.custom) setCustomFade();

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
