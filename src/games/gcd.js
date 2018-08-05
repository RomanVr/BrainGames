import getRandomNumber from '../utils/randomNumber';
import executeGame from './execute';

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

const taskGame = 'Find the greatest common divisor of given numbers.\n';

const gcdGame = () => {
  const questionGame = () => {
    const numberX = getRandomNumber(1, 30);
    const numberY = getRandomNumber(1, 30);
    const correctResult = calculateGcd(numberX, numberY).toString(10);
    return [`${numberX} ${numberY}`, correctResult];
  };
  executeGame(taskGame, questionGame);
};

export default gcdGame;
