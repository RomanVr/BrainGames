import getRandomNumber from '../utils/randomNumber';
import executeGame from '../gamedrive/executegame';

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
  let numberX;
  let numberY;
  let correctResult;
  const questionGame = () => () => {
    numberX = getRandomNumber(1, 30);
    numberY = getRandomNumber(1, 30);
    correctResult = calculateGcd(numberX, numberY).toString(10);
    return `Question: ${numberX} ${numberY}`;
  };

  const getCorrectResult = () => () => correctResult;
  executeGame(taskGame, questionGame(), getCorrectResult());
};

export default gcdGame;
