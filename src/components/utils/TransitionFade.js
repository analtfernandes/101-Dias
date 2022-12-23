import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

export function TransitionFade({ fadeVisible, setFadeVisible }) {
	const [display, setDisplay] = useState(fadeVisible);
	const visible = fadeVisible;

	useEffect(() => {
		setTimeout(() => {
			setFadeVisible(!fadeVisible);
		}, 400);

		setTimeout(() => {
			setDisplay(!display);
		}, 2000);
	}, []);

	return <Fade visible={visible} display={display} />;
}

const Fade = styled.div`
	width: 100%;
	height: 100%;
	background-color: black;
	opacity: ${(props) => (props.visible ? "1" : "0")};
	transition: all 1s linear;
	position: fixed;
	z-index: 2;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: ${(props) => (props.display ? "initial" : "none")};
`;
