import styled from "styled-components";
import { useRecordContext } from "../../../contexts";
import { Icons } from "../../utils";

export default function DayRecords() {
	const { records } = useRecordContext();

	return (
		<>
			{records.map(({ icon, text }, index) => (
				<Message key={index}>
					{icon ? <Icons type={icon} /> : ""}
					{text}
				</Message>
			))}
		</>
	);
}

const Message = styled.div`
	width: 100%;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 8px 10px;
	margin-bottom: 5px;
	background-color: rgba(0, 0, 0, 0.7);
	color: rgba(255, 255, 255, 0.8);
	font-size: 14px;

	ion-icon {
		font-size: 18px;
		margin-right: 10px;
	}
`;
