#!/usr/bin/env node

import readlineSync from 'readline-sync';
import nameAsk from '../src/cli.js';

const userName = nameAsk();

console.log('What is the result of the expression?');

const task = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const operators = ['+', '-', '*'];
  const i = Math.floor(Math.random() * operators.length);
  let a = 0;
  if (operators[i] === '+') {
    a = num1 + num2;
    return [`${num1} + ${num2}`, a];
  } if (operators[i] === '-') {
    a = num1 - num2;
    return [`${num1} - ${num2}`, a];
  }
  a = num1 * num2;
  return [`${num1} * ${num2}`, a];
};

let mark = 0;

for (let i = 1; i <= 3; i += 1) {
  const step = task();
  console.log(`Question: ${step[0]}`);
  const answer = readlineSync.question('Answer: ');
  if (answer == step[1]) {
    console.log('Correct!');
    mark += 1;
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${step[1]}`);
    console.log(`Let's try again, ${userName}!`);
    break;
  }
}

if (mark === 3) {
  console.log(`Congratulations, ${userName}!`);
}
