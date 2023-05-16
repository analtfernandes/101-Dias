import styled from "styled-components";
import { useLayoutEffectsContext } from "../../contexts";
import { Loading } from "../utils";

export function SavingGame() {
	const { isSaving } = useLayoutEffectsContext();

	return (
		<Wrapper display={isSaving ? "intial" : "none"}>
			<Loading />
			<span>Salvando...</span>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: fit-content;
	display: flex;
	align-items: center;
	position: fixed;
	top: 10px;
	right: 10px;
	z-index: 4;
	font-size: 14px;
	display: ${(props) => props.display};

	span {
		color: whitesmoke;
		font-family: "Roboto", sans-serif;
		letter-spacing: 0.3px;
		margin-left: 5px;
	}
`;
