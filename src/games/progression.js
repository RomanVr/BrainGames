import getRandomNumber from '../utils/randomNumber';
import executeGame from './execute';

const getProgression = () => {
  let element = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const indexMissingElement = getRandomNumber(1, 10);
  const countElements = 10;
  let progression = '';
  let correctResult;
  for (let i = 1; i <= countElements; i += 1) {
    if (i === indexMissingElement) {
      progression += '..';
      correctResult = element.toString(10);
    } else {
      progression += element.toString(10);
    }
    element += step;
    progression += ' ';
  }
  return [progression, correctResult];
};

const taskGame = 'What number is missing in this progression?.\n';

const progressionGame = () => {
  const questionGame = () => {
    const [progression, correctResult] = getProgression();
    return [progression, correctResult];
  };
  executeGame(taskGame, questionGame);
};

export default progressionGame;
