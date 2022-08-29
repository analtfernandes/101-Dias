
let arrayItems = [
    {id:1, type:'nutrition', name:'alimentos', qtd:30 },
    {id:2, type:'medkit', name:'remédios e curativos', qtd:5 }
];


function changeStorage ({ change, newItem }) {
    if (change) {
        const itemChanged = arrayItems.find(item => item.id === change.id);
        itemChanged.qtd += change.value;
    }

    if (newItem) {
        const { id, type, name, qtd } = newItem;
        arrayItems.push({ id, type, name, qtd });
    }

    let storageData = localStorage.getItem('gameData');
    let data = {
        ...JSON.parse(storageData),
        storage: arrayItems
    }
    localStorage.setItem('gameData', JSON.stringify(data));
}


export {
    arrayItems,
    changeStorage
}