import getRandomNuber from '../utils/randomNumber';
import executeGame from '../gamedrive/executegame';

const isEven = number => (number % 2 === 0);

const evenGame = () => {
  const taskGame = 'Answer "yes" if number even otherwise answer "no".\n';
  let question;
  let correctResult;
  const questionGame = () => () => {
    question = getRandomNuber();
    correctResult = isEven(question) ? 'yes' : 'no';
    return `Question: ${question}`;
  };
  const getCorrectResult = () => () => correctResult;
  executeGame(taskGame, questionGame(), getCorrectResult());
};

export default evenGame;
