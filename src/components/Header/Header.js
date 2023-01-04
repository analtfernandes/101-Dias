import styled from "styled-components";

import { useStatusContext } from "../../contexts";
import { Icons } from "../utils/";

export default function Header() {
	const { status } = useStatusContext();

	return (
		<Wrapper>
			<Time>
				{status.time <= 600 && <Icons type="sunny" />}
				{status.time > 600 && status.time <= 780 && (
					<Icons type="sunset" fontSize={22} />
				)}
				{status.time > 780 && <Icons type="moon" />}
			</Time>

			<Progress>
				<div>
					<h1>Tempo</h1>
					<span>{status.time} / 960</span>
				</div>
				<div>
					<h1>Dias</h1>
					<span>{status.day} / 101</span>
				</div>
			</Progress>

			<div>
				<div>
					<Icons type="create" />
					<span>{status.written}</span>
				</div>
				<div>
					<Icons type="barbell" />
					<span>{status.physical}</span>
				</div>
				<div>
					<Icons type="restaurant" />
					<span>{status.hungry} / 10</span>
				</div>
				<div>
					<Icons type="happy" />
					<span>{status.mental} / 50</span>
				</div>
				<div>
					<Icons type="bandage" />
					<span>{status.unhealth} / 5</span>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 20px;
	background-color: rgb(72 52 27);
	border: 3px solid rgb(36 22 5);
	border-top: none;
	border-radius: 0 0 15px 15px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

	div {
		display: flex;
		align-items: center;
	}

	& > div {
		width: 100%;
		display: flex;
		text-align: center;
		align-items: center;
		justify-content: space-evenly;
		color: ghostwhite;
		font-size: 18px;
	}

	h1 {
		font-weight: 600;
		font-size: 14px;
	}

	span {
		font-size: 16px;
	}
`;

const Progress = styled.div`
	div {
		height: 40px;
		margin-bottom: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

const Time = styled.div`
	&& {
		width: fit-content;
		position: fixed;
		top: 10px;
		left: 20px;
		color: ghostwhite;
		font-size: 18px;
	}
`;
