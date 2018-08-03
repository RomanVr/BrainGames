import readlineSync from 'readline-sync';
import getRandomNumber from './utils';

const getRandomOperator = () => {
  switch (getRandomNumber(1, 3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return '+';
  }
};

const calculateExpresion = (numberLeft, operator, numberRigth) => {
  switch (operator) {
    case '+':
      return (Number.parseInt(numberLeft, 10) + Number.parseInt(numberRigth, 10)).toString(10);
    case '-':
      return (Number.parseInt(numberLeft, 10) - Number.parseInt(numberRigth, 10)).toString(10);
    case '*':
      return (Number.parseInt(numberLeft, 10) * Number.parseInt(numberRigth, 10)).toString(10);
    default:
      return Number.NaN;
  }
};

const answerCount = 3;

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} \n`);
  for (let attemptsCount = 0; attemptsCount < answerCount; attemptsCount += 1) {
    const numberLeft = getRandomNumber(0, 30);
    const numberRigth = getRandomNumber(0, 30);
    const operator = getRandomOperator();
    console.log(`Question: ${numberLeft} ${operator} ${numberRigth}`);
    const answer = readlineSync.question('Your answer: ');
    const rigthAnswer = calculateExpresion(numberLeft, operator, numberRigth);
    if (answer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rigthAnswer}".`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
};

export default brainCalc;
