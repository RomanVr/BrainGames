import getRandomNumber from '../utils/randomNumber';
import executeGame from './execute';

const getSummNumber = (stringNumber) => {
  let summ = 0;
  for (let i = 0; i < stringNumber.length; i += 1) {
    summ += Number.parseInt(stringNumber[i], 10);
  }
  return summ;
};

const calculateBalance = (numberBalane) => {
  const stringNumber = numberBalane.toString(10);
  let summ = getSummNumber(stringNumber);
  let newStringNumber = '';
  let lengthNumber = stringNumber.length;
  let currentSymbol;
  for (let i = 0; i < stringNumber.length - 1; i += 1) {
    currentSymbol = Math.floor(summ / lengthNumber);
    summ -= currentSymbol;
    lengthNumber -= 1;
    newStringNumber += currentSymbol.toString(10);
  }
  newStringNumber += summ;
  return newStringNumber;
};

const taskGame = 'Balance the given number.';

const balanceGame = () => {
  const questionGame = () => {
    const numberBalance = getRandomNumber(100, 999);
    const correctResult = calculateBalance(numberBalance);
    return [numberBalance, correctResult];
  };
  executeGame(taskGame, questionGame);
};

export default balanceGame;
