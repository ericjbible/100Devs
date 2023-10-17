const library = [
  {
    title: 'test1',
    author: 'test1',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'test2',
    author: 'test2',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'test3',
    author: 'test3',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

for (let obj in library) {
  library[obj].status.read = true;
}

const [{ title: firstBook }] = library;
console.log(firstBook);
console.log(library);

console.log(JSON.stringify(library));
