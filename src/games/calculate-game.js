import getRandomNumber from '../utils/randomNumber';
import executeGame from '../gamedrive/executegame';

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
      return undefined;
  }
};

const calculateGame = () => {
  const taskGame = 'What is the result of the expression?\n';
  let numberLeft;
  let numberRigth;
  let operator;
  let correctResult;
  const questionGame = () => () => {
    numberLeft = getRandomNumber(0, 30);
    numberRigth = getRandomNumber(0, 30);
    operator = getRandomOperator();
    correctResult = calculateExpresion(numberLeft, operator, numberRigth);
    return `Question: ${numberLeft} ${operator} ${numberRigth}`;
  };

  const getCorrectResult = () => () => correctResult;

  executeGame(taskGame, questionGame(), getCorrectResult());
};

export default calculateGame;
