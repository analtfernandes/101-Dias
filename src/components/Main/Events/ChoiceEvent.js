import { Buttons } from "./Modal";

export function ChoiceEvent({ closeModal }) {
	function closeChoiceEventModal() {
		closeModal();
	}

	return (
		<>
			<p>Você ouviu um barulho vindo do porão.</p>
			<p>O que fazer?</p>

			<Buttons>
				<button onClick={closeChoiceEventModal}>Investigar</button>
				<button onClick={closeChoiceEventModal}>Ignorar</button>
			</Buttons>
		</>
	);
}
