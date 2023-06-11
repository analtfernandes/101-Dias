import styled from "styled-components";

import { Tracking } from "../events/Tracking";
import DayRecords from "../dayRecords/DayRecords";
import Storage from "../storage/Storage";
import { Message } from "../messages/Message";

export default function Main() {
	return (
		<Wrapper>
			<Tracking />

			<Container>
				<DayRecords />
			</Container>

			<Container width="35%" maxWidth="450px" margin="0">
				<Storage />
			</Container>

			<Message />
		</Wrapper>
	);
}

const Wrapper = styled.main`
	min-height: 90vh;
	display: flex;
	align-items: center;
	margin: 60px 0 0;
	padding: 0 15px;
	position: relative;
`;

const Container = styled.div`
	width: ${(props) => (props.width ? props.width : "100%")};
	max-width: ${(props) => (props.maxWidth ? props.maxWidth : "auto")};
	height: 394px;
	margin-right: ${(props) => (props.margin ? props.margin : "15px")};
	padding: 20px 10px;
	border-radius: 10px;
	overflow-y: scroll;
	background-color: rgba(80, 63, 42, 0.9);

	&::-webkit-scrollbar {
		display: none;
	}
`;
