import getRandomNuber from '../utils/randomNumber';
import executeGame from './execute';

const isEven = number => (number % 2 === 0);

const taskGame = 'Answer "yes" if number even otherwise answer "no".\n';

const evenGame = () => {
  const questionGame = () => {
    const question = getRandomNuber();
    const correctResult = isEven(question) ? 'yes' : 'no';
    return [question, correctResult];
  };
  executeGame(taskGame, questionGame);
};

export default evenGame;
