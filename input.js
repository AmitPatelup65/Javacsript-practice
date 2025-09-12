const readline= require('readline-sync');
// let n=readline.questionInt('Enter The NUmber')
// let x=readline.questionInt('Enter The NUmber')
let inputs = readline.question('Enter two numbers separated by space: ');
let [n, x] = inputs.split(' ').map(Number);
console.log(n+x)