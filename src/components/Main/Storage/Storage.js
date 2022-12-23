import styled from "styled-components";
import { Icons } from "../../utils";
import { arrayItems } from "./StorageItems";

export default function Storage() {
	const items = arrayItems;

	return (
		<Container>
			<h2>Armazém</h2>

			{items.map(({ type, name, qtd }, index) => (
				<Item key={index}>
					<span>
						<Icons type={type} />
						{name}
					</span>
					<b>{qtd}</b>
				</Item>
			))}
		</Container>
	);
}

const Container = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	color: rgb(20 11 0);

	h2 {
		width: 100%;
		height: 40px;
		font-size: 24px;
		font-weight: 500;
		text-align: center;
		margin: 10px 0 20px;
		border-bottom: 2.5px solid rgb(30 19 5);
	}
`;

const Item = styled.div`
	width: 100%;
	border-bottom: 1px solid rgb(30 19 5);
	padding: 14px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 14px;

	span {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	svg {
		font-size: 16px;
		margin-right: 7px;
	}
`;
