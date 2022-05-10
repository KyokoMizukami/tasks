const mySumFunc = require('./mySums');
const myArr = require('./myArr');
const findNum = require('./myArr');
const person = require('./employee');

console.log(mySumFunc.mySum(1, 2, 3))
const result = mySumFunc.mySum(...myArr.myArr)
console.log(result)
console.log(findNum.getAverage())

setTimeout(() => {
  console.log('Goodbye')
}, 3000)

console.log(person.employee('Bob', 'sponge-bob@mail.com', 'animation', '2022/03/01'))
