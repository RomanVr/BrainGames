import * as evenGame from '../games/even-game';
import * as calcGame from '../games/calculate-game';
import * as gcdGame from '../games/gcd-game';
import executegame from './executegame';

const chooseGame = (nameGame) => {
  switch (nameGame) {
    case 'gcd-game':
      executegame(gcdGame);
      return;
    case 'even-game':
      executegame(evenGame);
      return;
    case 'calculate-game':
      executegame(calcGame);
      break;
    default:
  }
};

export default chooseGame;
