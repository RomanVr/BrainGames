import getRandomNumber from '../utils';
import executeGame from '../execute';

const calculateGcd = (numberX, numberY) => {
  let x = numberX;
  let y = numberY;
  while (x && y) {
    if (x > y) x %= y;
    else y %= x;
  }
  x += y;
  return x;
};

const taskGame = 'Find the greatest common divisor of given numbers.';

const maxRangeNumbers = 30;

const getQuestionAndRigthAnswer = () => {
  const numberX = getRandomNumber(1, maxRangeNumbers);
  const numberY = getRandomNumber(1, maxRangeNumbers);
  const rigthAnswer = calculateGcd(numberX, numberY).toString(10);
  return [`${numberX} ${numberY}`, rigthAnswer];
};

const gcdGame = () => {
  executeGame(taskGame, getQuestionAndRigthAnswer);
};

export default gcdGame;
