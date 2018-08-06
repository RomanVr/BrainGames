import getRandomNumber from '../utils';
import executeGame from '../execute';

const operatorsCounts = 3;

const getRandomOperator = () => {
  switch (getRandomNumber(1, operatorsCounts)) {
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
      return undefined;
  }
};

const taskGame = 'What is the result of the expression?';

const maxRangeNumbers = 30;

const getQuestionAndRigthAnswer = () => {
  const numberLeft = getRandomNumber(0, maxRangeNumbers);
  const numberRigth = getRandomNumber(0, maxRangeNumbers);
  const operator = getRandomOperator();
  const rigthAnswer = calculateExpresion(numberLeft, operator, numberRigth);
  return [`${numberLeft} ${operator} ${numberRigth}`, rigthAnswer];
};

const calculateGame = () => {
  executeGame(taskGame, getQuestionAndRigthAnswer);
};

export default calculateGame;
