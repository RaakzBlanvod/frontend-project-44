/* eslint-disable */
import readlineSync from '/Users/raakz/frontend-project-44/readline-sync/lib/readline-sync.js';
/* eslint-enable */

export function greetUser() {
  const name = readlineSync.question('May I have your name? ');
  /* eslint-disable */
  console.log(`Hello, ${name}!`);
  /* eslint-enable */
}