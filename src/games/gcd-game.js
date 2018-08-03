import getRandomNumber from './utils';

const calculateGcd = (numberX, numberY) => {
  let X = numberX;
  let Y = numberY;
  while (X && Y) {
    if (X > Y) X %= Y;
    else Y %= X;
  }
  X += Y;
  return X;
};

let numberX;
let numberY;

export const taskGame = () => ('Find the greatest common divisor of given numbers.\n');

export const questionGame = () => {
  numberX = getRandomNumber(1, 30);
  numberY = getRandomNumber(1, 30);
  return `Question: ${numberX} ${numberY}`;
};

export const correctResult = () => calculateGcd(numberX, numberY).toString(10);
