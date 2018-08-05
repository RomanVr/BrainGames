import getRandomNuber from '../utils';
import executeGame from '../execute';

const isEven = number => (number % 2 === 0);

const taskGame = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndCorrectResult = () => {
  const question = getRandomNuber().toString(10);
  const correctResult = isEven(question) ? 'yes' : 'no';
  return [question, correctResult];
};

const evenGame = () => {
  executeGame(taskGame, getQuestionAndCorrectResult);
};

export default evenGame;
