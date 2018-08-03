import readlineSync from 'readline-sync';
import getRandomNuber from './utils';

const answerCount = 3;

const isEven = number => (number % 2 ? 'no' : 'yes');

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  for (let attemptsCount = 0; attemptsCount < answerCount; attemptsCount += 1) {
    const question = getRandomNuber();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const rigthAnswer = isEven(question);
    if (answer === rigthAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rigthAnswer}".`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainEven;
