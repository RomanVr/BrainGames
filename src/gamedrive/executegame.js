import readlineSync from 'readline-sync';

const answerCount = 3;

const braingame = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${game.taskGame()}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  for (let attemptsCount = 0; attemptsCount < answerCount; attemptsCount += 1) {
    console.log(`${game.questionGame()}`);
    const answer = readlineSync.question('Your answer: ');
    const rigthAnswer = game.correctResult();
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

export default braingame;
