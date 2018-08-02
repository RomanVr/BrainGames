import readlineSync from 'readline-sync';
import getRandomArbitRary from '../lib/supportFunctions';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  const answerCount = 3;
  let numberCorrectAttempts = 0;
  while (numberCorrectAttempts < answerCount) {
    const numberMake = getRandomArbitRary();
    console.log(`Question: ${numberMake}`);
    const answer = readlineSync.question('Your answer: ');
    const rigthAnswer = numberMake % 2 === 0 ? 'yes' : 'no';
    if (answer === 'rigthAnswer') {
      numberCorrectAttempts += 1;
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
