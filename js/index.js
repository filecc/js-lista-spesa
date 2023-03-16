const list = [
    'uova',
    'pane',
    'passata di pomodoro',
    'cipolle',
    'cioccolato',
    'birra',
    'salame'
];

const ul = document.querySelector('ul');
let counter = 0; 

while (counter < list.length) {
    ul.append(createChild('li', '', list[counter]))
    counter++;
}

/* for (ingredients in list){
     ul.append(createChild('li', '', list[ingredients]));
} */