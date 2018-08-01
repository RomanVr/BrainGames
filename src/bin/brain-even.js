#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomArbitRary from '../supportFunctions';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  console.log('\n');
  const getNumber = getRandomArbitRary();
  let rigthGuess = 0;
  let number = getNumber();
  while (rigthGuess < 3) {
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 === 1)) {
      rigthGuess += 1;
      console.log('Correct!');
      number = getNumber();
    } else {
      const rigthAnswer = number % 2 === 0 ? 'yes' : 'no';
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${rigthAnswer}".`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
brainEven();
