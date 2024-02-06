import { prompt } from './helper.js';

console.log('ADDITION-MASTER ™️');

// 🦁 Affiche une log en utilisant les template string pour expliquer que l'utilisateur doit choisir entre
// 1. Addition
// 2. Soustraction

console.log(
  `Choose an operator :
    1. Addition
    2. Soustraction
    3. Multiplication
    4. Division
`
);

// 🦁 Demande avec `await prompt` la réponse de l'utilisateur. (dans une variable `operator`)

const operator = Number(await prompt('Enter the operator : '));

// 🦁 Si la réponse n'est pas égale à 1 ou 2, affiche une log d'erreur et quitte le programme avec `process.exit(1)`

if (operator !== 1 && operator !== 2 && operator !== 3 && operator !== 4) {
  console.log('Error: Operator must be 1, 2, 3 or 4');
  process.exit(1);
}

// 💡 Pour ça, on va utiliser deux conditions dans notre if
// 📖 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND
// 💡 if (condition1 && condition2)
// 💡 On vérifie que la condition1 est vraie mais AUSSI la condition2 !

const limitNumber = 100000000000000;

const firstNumber = Number(await prompt('Enter the first number : '));

if (Number.isNaN(firstNumber) || firstNumber > Math.abs(limitNumber)) {
  console.log(
    'Error : firstNumber is not a number or its greater than 100000000000000'
  );
  process.exit(1);
}

const secondNumber = Number(await prompt('Enter the second number : '));

if (Number.isNaN(secondNumber) || secondNumber > Math.abs(limitNumber)) {
  console.log(
    'Error : secondNumber is not a number or its greater than 100000000000000'
  );
  process.exit(1);
}

if (operator === 4 && secondNumber === 0) {
  console.log('Second number cannot be 0');
  process.exit(1);
}

let result;

// 🦁 Utilise switch pour gérer les différents cas
// 📖 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
switch (operator) {
  case 1:
    result = firstNumber + secondNumber;
    console.log(`The result of addition is : ${result}`);
    break;
  case 2:
    result = firstNumber - secondNumber;
    console.log(`The result of soustraction is : ${result}`);
    break;
  case 3:
    result = firstNumber * secondNumber;
    console.log(`The result of multiplication is : ${result}`);
    break;
  case 4:
    result = firstNumber / secondNumber;
    console.log(`The result of division is : ${result}`);
    break;
  default:
    console.log('Operator unknown');
}
