import getRandomNumber from '../utils/randomNumber';
import executeGame from './executegame';

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

  const questionGame = () => () => {
    const numberLeft = getRandomNumber(0, 30);
    const numberRigth = getRandomNumber(0, 30);
    const operator = getRandomOperator();
    const correctResult = calculateExpresion(numberLeft, operator, numberRigth);
    return [`Question: ${numberLeft} ${operator} ${numberRigth}`, correctResult];
  };

  executeGame(taskGame, questionGame());
};

export default calculateGame;
