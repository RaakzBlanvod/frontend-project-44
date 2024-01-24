/* eslint-disable */
import readlineSync from 'readline-sync';
/* eslint-enable */

export default function greetUser() {
  const name = readlineSync.question('May I have your name? ');
  /* eslint-disable */
  console.log(`Hello, ${name}!`);
  /* eslint-enable */
}
