import readlineSync from 'readline-sync';
import getRandomArbitRary from '../lib/supportFunctions';

const getRandomOperator = () => {
  switch (getRandomArbitRary(1, 3)) {
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

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name} \n`);
  const answerCount = 3;
  let numberCorrectAttempts = 0;
  let attemptsCount = 0;
  while (attemptsCount < answerCount) {
    const numberLeft = getRandomArbitRary(0, 30);
    const numberRigth = getRandomArbitRary(0, 30);
    const operator = getRandomOperator();
    console.log(`Question: ${numberLeft} ${operator} ${numberRigth}`);
    const answer = readlineSync.question('Your answer: ');
    const rigthAnswer = calculateExpresion(numberLeft, operator, numberRigth);
    if (answer === rigthAnswer) {
      numberCorrectAttempts += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rigthAnswer}".`);
    }
    attemptsCount += 1;
  }
  if (answerCount === numberCorrectAttempts) console.log(`Congratulations, ${name}!`);
  else console.log(`Let's try again, ${name}`);
};

export default brainCalc;
