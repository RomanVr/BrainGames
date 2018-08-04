import getRandomNumber from '../utils/randomNumber';
import executeGame from './executegame';

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

const gcdGame = () => {
  const taskGame = 'Find the greatest common divisor of given numbers.\n';
  const questionGame = () => () => {
    const numberX = getRandomNumber(1, 30);
    const numberY = getRandomNumber(1, 30);
    const correctResult = calculateGcd(numberX, numberY).toString(10);
    return [`Question: ${numberX} ${numberY}`, correctResult];
  };
  executeGame(taskGame, questionGame());
};

export default gcdGame;
