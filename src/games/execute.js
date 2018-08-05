import readlineSync from 'readline-sync';

const answerCount = 3;

const braingame = (taskGame, questionGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${taskGame}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}\n`);
  for (let attemptsCount = 0; attemptsCount < answerCount; attemptsCount += 1) {
    const [question, rigthAnswer] = questionGame();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
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
