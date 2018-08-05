import getRandomNumber from '../utils';
import executeGame from '../execute';

const isPrimeNumber = (number) => {
  const maxDivisor = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const maxRangePrimeNumbers = 100;

const getQuestionAndCorrectResult = () => {
  const questionPrimeNumber = getRandomNumber(2, maxRangePrimeNumbers).toString(10);
  const correctResult = isPrimeNumber(questionPrimeNumber) ? 'yes' : 'no';
  return [questionPrimeNumber, correctResult];
};

const taskGame = 'Is this number prime?';

const startPrimeGame = () => {
  executeGame(taskGame, getQuestionAndCorrectResult);
};

export default startPrimeGame;
