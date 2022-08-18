
const arrayButtons = [{
        text:'Escrever',
        states:[
            { state:"time", value:1 },
            { state:"written", value:1 },
            { state:"mental", value:1 }
        ]
    },{
        text:'Alimentar-se',
        states:[
            { state:"hungry", value:-5 },
            { state:"mental", value:1 }
        ]
    },{
        text:'Exercitar-se',
        states:[
            { state:"time", value:1 },
            { state:"physical", value:1 },
            { state:"mental", value:1 }
        ]
    },{
        text:'Dormir',
        disabled: true
    }
];

export default arrayButtons;