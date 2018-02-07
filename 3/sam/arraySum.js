const testArray = [1, 2, 3];

const add = (x, y) => x + y;

const sum = testArray.reduce(add, 0);

console.log('sum', sum);

