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
    const li = document.createElement('li');
    li.innerHTML = list[counter];
    ul.appendChild(li);
    
    counter++;
}

/* for (ingredients in list){
    const li = document.createElement('li');
    li.innerHTML = list[ingredients];
    ul.appendChild(li);
} */