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

let numberLeft;
let numberRigth;
let operator;

export const taskGame = () => ('What is the result of the expression?\n');

export const questionGame = () => {
  numberLeft = getRandomNumber(0, 30);
  numberRigth = getRandomNumber(0, 30);
  operator = getRandomOperator();
  return `Question: ${numberLeft} ${operator} ${numberRigth}`;
};

export const correctResult = () => calculateExpresion(numberLeft, operator, numberRigth);
