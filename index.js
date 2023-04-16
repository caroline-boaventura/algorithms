const createNewList = require('./createNewList');
const calculator = require('./calculator');
const createId = require('./createId');

console.log(createNewList([ 'a', 10, 'b', 'hola', 122, 15], 'numbers'));
console.log(createNewList([ 'a', 10, 'b', 'hola', 122, 15], 'strings'));
console.log(createNewList([ 'a', 10, 'b', 'hola', 122, 15], 'higherNumber'));

console.log(calculator.addition([10, 2, 3]))
console.log(calculator.subtraction([-100, 2, 3]))
console.log(calculator.multiplication([10, 2, 3]))
console.log(calculator.division(3, 2))
// console.log(calculator.division(1, 0))

const id = createId();
console.log(id)