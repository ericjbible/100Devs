// querySelectorAll()

const listItems = document.querySelectorAll('.item');
// console.log(listItems[1]);

// listItems.forEach((item, index) => {
//   item.computedStyleMap.color = 'purple';

//   if (index === 1) item.remove();

//   // if (index === 0) {
//   //   item.innerHTML =
//   // }
// });

const listItems2 = document.getElementsByClassName('item');

console.log(listItems2);

const listItems3 = document.getElementsByTagName('li');

console.log(listItems3);
