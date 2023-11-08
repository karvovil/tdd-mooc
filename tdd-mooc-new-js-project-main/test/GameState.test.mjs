import { expect } from "chai";
import { GameState } from "../src/GameState.mjs"; 

describe("GameState", () => {
  it("toString returns a string", () => {
    let gs = new GameState('bo$ob!')
    expect(gs.toString()).to.be.a('string');
  });

  it("noNumbers() removes numbers from RLE format", () => {
    let gs = new GameState('b2o$o2b$o2b!')
    expect(gs.noNumbers()).to.not.contain.oneOf(
      ['0','1','2','3','4','5','6','7','8','9',]
    )
  });

});
