let d;

d = new Date();

d = d.toString();

d = new Date(2021, 5, 10, 12, 30, 0);

d = new Date('2021-07-10T12:30:00');

d = new Date('7-10-2022');

// https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off

d = Date.now();

d = new Date('7-10-2022 12:30:00');
d = d.getTime();
console.log(d, typeof d);
