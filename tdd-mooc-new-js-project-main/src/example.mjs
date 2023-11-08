import { GameState } from "./GameState.mjs";

export function game(str) {
  const strToCheck = str.split('\n')[0];
  if ( strToCheck.match(/(?![bo$1234567890!])./g) ){
    throw new Error('not valid')
  }
  let gs = new GameState(strToCheck)
  return gs.toString();
}
