import styled from "styled-components";
import { useButtonContext } from "../../contexts";

import Button from "./Button";

export default function Footer({ setFadeConfig }) {
	const { buttons } = useButtonContext();

	return (
		<Wrapper>
			{buttons.map((button, index) => (
				<Button key={index} {...button} buttonKey={button.key} setFadeConfig={ setFadeConfig }/>
			))}
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	padding: 20px 0;
	background-color: rgb(72 52 27);
	border: 3px solid rgb(36 22 5);
	border-bottom: none;
	border-radius: 15px 15px 0 0;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
`;
