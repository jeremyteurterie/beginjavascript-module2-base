// 🦁 Importe cette fonction
import { prompt } from './helper.js';

console.log('NODE-MAILER ™️');

const mail = await prompt('Enter recipient your email : ');
const object = await prompt('Enter your object : ');
const message = await prompt('Enter your message : ');

if (object.length === 0 || message.length === 0) {
  console.log('Erreur !');
  process.exit(1);
} else {
  console.log(
    `The mail is sending...
    To user : ${mail}
    Object : ${object}
    ${message}`
  );
}

// 🦁 Récupère le mail, l'objet et le message

// 🦁 Affiche un log
// - Indiquant que le mail est en train d'être envoyé
// - Le mail du destinataire
// - L'objet du mail
// - Le message du mail
