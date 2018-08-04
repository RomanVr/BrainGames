import getRandomNuber from '../utils/randomNumber';
import executeGame from './executegame';

const isEven = number => (number % 2 === 0);

const evenGame = () => {
  const taskGame = 'Answer "yes" if number even otherwise answer "no".\n';

  const questionGame = () => () => {
    const question = getRandomNuber();
    const correctResult = isEven(question) ? 'yes' : 'no';
    return [`Question: ${question}`, correctResult];
  };
  executeGame(taskGame, questionGame());
};

export default evenGame;
