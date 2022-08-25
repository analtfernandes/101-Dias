
function verifyStorage ({ setStatus }) {
    let storageData = localStorage.getItem('gameData');

    if (!storageData) {
        const data = {
            time: 0,
            day: 1,
            written: 0,
            physical: 0,
            hungry: 0,
            mental: 50,
            unhealth: 0,
            storage: []
        };

        localStorage.setItem('gameData', JSON.stringify(data));
        storageData = localStorage.getItem('gameData');
    }

    setStatus(JSON.parse(storageData));
}

export default verifyStorage;