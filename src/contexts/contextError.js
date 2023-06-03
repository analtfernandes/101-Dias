export function handleContextError(context = null) {
	const message = context
		? `O contexto ${context} não está disponível!`
		: "Esse contexto não está disponível!";

	throw new Error(message);
}
