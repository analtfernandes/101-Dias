
function sort () {
    return Math.random() - 0.5;
}


function UpdateState ({ states, status, setStatus }) {

    const newStatus = {};

    for (let i = 0; i < states.length; i++) {
        const state = states[i].state;
        let value = states[i].value;
        
        if (state === 'time') {
            newStatus.time = status.time + value;
        }
        
        if (state === 'written') {
            const sortNumber = sort();

            newStatus.written = status.written + value;

            if ((newStatus.written % 100 === 0) && (sortNumber > 0)) {
                newStatus.hungry = status.hungry + 1;
            }
        }
        
        if (state === 'hungry') {
            if ((status.hungry + value) <= 0) {
                value = 0 - status.hungry;
            } else if (status.hungry <= 7) {
                value = -4;
            } else {
                value = -3;
            }

            newStatus.hungry = status.hungry + value;
        }
        
        if (state === 'physical') {
            const sortNumber = sort();

            newStatus.physical = status.physical + value;

            if ((newStatus.physical % 50 === 0) && (sortNumber > 0)) {
                newStatus.hungry = status.hungry + 1;
            }
        }
        
        if (state === 'mental') {
            
            if (status.mental === 80) {
                value = 0;
            }

            if (Math.abs(status.physical - status.written) >= 100 ||
                Math.abs(status.physical - status.read) >= 100) {
                value = -1;
            }

            if ((newStatus.hungry === undefined)) {
                newStatus.mental = status.mental + value;
            }
        }
    }

    setStatus({
        ...status,
       ...newStatus
    });
}

export default UpdateState;