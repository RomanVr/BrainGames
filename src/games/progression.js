import getRandomNumber from '../utils';
import executeGame from '../execute';

const startElement = getRandomNumber(1, 20);
const elementsCount = 10;
const maxStepProgression = 10;

const getQuestionAndCorrectResult = () => {
  const step = getRandomNumber(1, maxStepProgression);
  const indexMissingElement = getRandomNumber(1, elementsCount);
  let progression = '';
  let correctResult;
  for (let i = 1; i <= elementsCount; i += 1) {
    if (i === indexMissingElement) {
      progression += '..';
      correctResult = (startElement + (i - 1) * step).toString(10);
    } else {
      progression += (startElement + (i - 1) * step).toString(10);
    }
    progression += ' ';
  }
  return [progression, correctResult];
};

const taskGame = 'What number is missing in this progression?';

const progressionGame = () => {
  executeGame(taskGame, getQuestionAndCorrectResult);
};

export default progressionGame;
