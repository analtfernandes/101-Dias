const occorrences = [{ icon: "sunny", text: "O dia começou" }];

function addEvent({ icon, text }) {
	occorrences.push({ icon, text });
}

export { occorrences, addEvent };
