import { Storage } from "../Main/Storage/StorageItems";


function sort () {
    return Math.random() - 0.5;
}


function UpdateState ({ states, status, setStatus }) {

    const newStatus = {};
    const sortNumber = sort();

    for (let i = 0; i < states.length; i++) {
        const state = states[i].state;
        let value = states[i].value;
        
        if (state === 'time') {
            newStatus.time = status.time + value;
        }
        
        if (state === 'written') {

            newStatus.written = status.written + value;

            if ((newStatus.written % 100 === 0) && (sortNumber > 0)) {
                newStatus.hungry = status.hungry + 1;
            }

            if ((status.written - status.physical) >= 100) {

                if ((status.mental > 20) && (status.written % 3 === 0)) {
                    newStatus.mental = status.mental - 1;
                }
            } else if ((status.mental < 80) && (status.written % 10 === 0)) {
                newStatus.mental = status.mental + 1
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

            if (value !== 0) {
                if (status.mental < 80) {
                    newStatus.mental = status.mental + 1;
                }
                
                Storage({ change:{ id:1, value:value } });
            }
        }
        
        if (state === 'physical') {

            newStatus.physical = status.physical + value;

            if ((newStatus.physical % 50 === 0) && (sortNumber > 0)) {
                newStatus.hungry = status.hungry + 1;
            }

            if ((status.physical - status.written) >= 100) {
                
                if ((status.mental > 20) && (status.physical % 3 === 0)) {
                    newStatus.mental = status.mental - 1
                }
            } else if ((status.mental < 80) && (status.physical % 10 === 0)) {
                newStatus.mental = status.mental + 1
            }
        }
        
        if (state === 'mental') {
            newStatus.mental = status.mental + value;
        }
    }

    setStatus({
        ...status,
       ...newStatus
    });
}

export default UpdateState;