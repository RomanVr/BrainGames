import getRandomNumber from '../utils';
import executeGame from '../execute';

const isPrimeNumber = (number) => {
  if (number < 2) return false;
  const maxDivisor = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= maxDivisor; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const maxRangePrimeNumbers = 100;

const getQuestionAndRigthAnswer = () => {
  const questionPrimeNumber = getRandomNumber(2, maxRangePrimeNumbers).toString(10);
  const rigthAnswer = isPrimeNumber(questionPrimeNumber) ? 'yes' : 'no';
  return [questionPrimeNumber, rigthAnswer];
};

const taskGame = 'Is this number prime?';

const startPrimeGame = () => {
  executeGame(taskGame, getQuestionAndRigthAnswer);
};

export default startPrimeGame;
