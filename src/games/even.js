import getRandomNuber from '../utils';
import executeGame from '../execute';

const isEven = number => (number % 2 === 0);

const taskGame = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndRigthAnswer = () => {
  const question = getRandomNuber();
  const rigthAnswer = isEven(question) ? 'yes' : 'no';
  return [`${question}`, rigthAnswer];
};

const evenGame = () => {
  executeGame(taskGame, getQuestionAndRigthAnswer);
};

export default evenGame;
