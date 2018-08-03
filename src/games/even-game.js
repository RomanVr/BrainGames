import getRandomNuber from './utils';

const isEven = number => (number % 2 ? 'no' : 'yes');

export const name = () => (console.log('Answer "yes" if number even otherwise answer "no".\n'));

let question;

export const questionGame = () => {
  question = getRandomNuber();
  console.log(`Question: ${question}`);
};

export const correctResult = () => isEven(question);
