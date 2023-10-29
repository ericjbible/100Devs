function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  const icon = document.createElement('i');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  return button;
}

function createIcon(classes) {}

createNewItem('Cheese');
