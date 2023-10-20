// document.getElementById()

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').getAttribute('id'));

// Set attributes

document.getElementById('app-title').title = 'Shopping List';
const title = document.getElementById('app-title');
document.getElementById('app-title').setAttribute('class', 'title');

console.log(title);

// Get/change content

console.log(title.textContent);
title.textContent = 'Hello World';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Hello Again</strong>';

// Change styles

title.style.color = 'red';
title.style.backgroundColor = 'black';

// document.querySelector()

console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'blue';

const list = document.querySelector('ul');
const firstItem = list.querySelector('li');

firstItem.style.color = 'orange';
