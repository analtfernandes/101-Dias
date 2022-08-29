const occorrences = [
    {type:'sunny', text:'O dia começou'}
];


function addEvent ({ type, text }) {
    occorrences.push({ type, text });
}


export {
    occorrences,
    addEvent
}