// 🦁 Importe cette fonction
import { prompt } from './helper.js';

console.log('ADDITION-MASTER ™️');

const result = await prompt('Quel est ton nom ? ');

const resultNumber1 = await prompt('Quel est ton premier nombre ? ');
const resultNumber2 = await prompt('Quel est ton deuxieme nombre ? ');

const firstNumber = Number(resultNumber1);
const secondNumber = Number(resultNumber2);

if (firstNumber === 0 || secondNumber === 0) {
  console.log('Erreur ! Un nombre ne peut pas être 0 pour cette opération.');
  process.exit(1);
} else {
  const addition = firstNumber / secondNumber;
  console.log(`Bravo ${result}, Le resultat est ${addition}`);
}

// 🦁 Utilise la fonction "prompt" pour demander le premier nombre à l'utilisateur
// 🦁 Stocke le résultat dans une variable "firstNumber" et utilise `Number()` pour convertir la valeur en nombre
// 💡 await prompt('Enter your name: ') permet de récupérer la valeur saisie par l'utilisateur

// 🦁 Fais la même chose pour la variable "secondNumber"

// 🦁 Affiche l'addition des deux nombres
