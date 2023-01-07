import ReactModal from "react-modal";
import styled from "styled-components";
import { MODAL_TYPES } from "../../enums";

import { ChoiceEvent } from "./ChoiceEvent";
import { Event } from "./Event";

ReactModal.setAppElement(".root");

export function Modal({ modalConfig, setModalConfig, eventData }) {
	const customReactModalStyle = {
		overlay: {
			backgroundColor: "rgba(0, 0, 0, 0.6)",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			zIndex: 15,
		},
	};

	function closeModal(config = { isOpen: false }) {
		setModalConfig({ ...config });
	}

	return (
		<ModalStyle style={customReactModalStyle} isOpen={modalConfig.isOpen}>
			{modalConfig.type === MODAL_TYPES.choiceEvent && (
				<ChoiceEvent closeModal={closeModal} />
			)}

			{modalConfig.type === MODAL_TYPES.event && (
				<Event
					eventData={modalConfig.data || eventData}
					closeModal={closeModal}
				/>
			)}
		</ModalStyle>
	);
}

const ModalStyle = styled(ReactModal)`
	width: 80%;
	max-width: 500px;
	min-width: 300px;
	height: auto;
	border-radius: 10px;
	padding: 20px;
	background-color: rgba(80, 63, 42, 0.9);
	box-shadow: 0 0 14px 7px rgba(0, 0, 0, 0.5);
	color: whitesmoke;
	text-align: center;
	font-size: 18px;
	font-family: "Roboto", sans-serif;

	p {
		line-height: 21px;
	}

	> div {
		margin: 20px 0 0 0;
	}

	span {
		width: 100%;
		display: inline-block;
		text-align: start;
		font-size: 14px;
		line-height: 20px;
	}
`;

export const Buttons = styled.section`
	height: 32px;
	display: flex;
	justify-content: space-evenly;
	margin-top: 30px;

	button {
		width: 100%;
		max-width: ${(props) => (props.maxWidth ? props.maxWidth : "150px")};
		font-family: "Roboto", sans-serif;
		background-color: rgb(36, 21, 3);
		border-radius: 3px;
		border: none;
		box-shadow: 0 1px 4px 0 rgb(0 0 0 / 50%);
		font-size: 14px;
		color: ghostwhite;
		cursor: pointer;

		:hover {
			filter: brightness(1.2);
		}
	}
`;
