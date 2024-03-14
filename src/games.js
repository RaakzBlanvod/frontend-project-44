const taskCalc = () => {
  const operand1 = Math.round(Math.random() * 10);
  const operand2 = Math.round(Math.random() * 10);

  const operator = ['+', '*', '-'];
  const indexOper = Math.round(Math.random() * 2);

  let answer = 0;

  switch (indexOper) {
    case 0:
      answer = `${operand1 + operand2}`;
      break;
    case 1:
      answer = `${operand1 * operand2}`;
      break;
    default:
      answer = `${operand1 - operand2}`;
      break;
  }

  return [`${operand1} ${operator[indexOper]} ${operand2}`, answer];
};

const taskEven = () => {
  const q = Math.round(Math.random() * 100);
  let a = '';
  if (q % 2 === 0) {
    a = 'yes';
  } else {
    a = 'no';
  }

  return [q, a];
};

const taskGcd = () => {
  const num1 = Math.round(Math.random() * 50);
  const num2 = Math.round(Math.random() * 50);

  let a = num1;
  let b = num2;
  while (a !== 0 && b !== 0) {
    if (a >= b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const answer = `${a + b}`;
  return [`${num1} ${num2}`, answer];
};

const taskPrime = () => {
  const num = Math.round(Math.random() * 50);

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return [num, 'no'];
    }
  }
  return [num, 'yes'];
};

const taskProgression = () => {
  const arrayLength = Math.floor(Math.random() * 5) + 5;
  const progressionDelta = Math.round(Math.random() * 10);
  const firstNumber = Math.round(Math.random() * 100);
  const progression = [];
  progression.push(firstNumber);
  for (let i = 1; i < arrayLength; i += 1) {
    progression.push(progression[i - 1] + progressionDelta);
  }
  const emptyIndex = Math.floor(Math.random() * arrayLength);
  const answer = `${progression[emptyIndex]}`;
  progression[emptyIndex] = '..';

  return [progression.join(' '), answer];
};

export {
  taskCalc, taskEven, taskGcd, taskPrime, taskProgression,
};
