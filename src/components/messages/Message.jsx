import styled from "styled-components";
import { useStatusContext } from "../../contexts";
import { useThoughts } from "../../hooks";
import { useEffect, useState } from "react";

export function Message() {
	const { status } = useStatusContext();
	const thoughts = useThoughts();
	const [message, setMessage] = useState();
	const [opacity, setOpacity] = useState("0");

	useEffect(() => {
		const thought = thoughts.get();

		setMessage(thought);
		setOpacity("0.8");

		if (thought) {
			setTimeout(() => setOpacity("0"), 2500);
			setTimeout(() => setMessage(null), 3000);
		}
	}, [status.time]);

	return (
		<Wrapper opacity={opacity}>
			<span>{message}</span>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 90%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	background-color: black;
	opacity: ${(props) => props.opacity};
	position: absolute;
	z-index: 1;
	bottom: 90px;
	left: calc(100vw - 95%);
	font-size: 16px;
	line-height: 32px;
	color: whitesmoke;
	transition: all 0.9s ease 0s;
`;
