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

  it("noNumbers() keeps the grid size same", () => {
    let gs = new GameState('b2o$o2b$o2b!')
    expect(gs.noNumbers().length).to.equal(12);
  });
  
  it("noNumbers() replaces numbers correctly", () => {
    let gs = new GameState('b2o$o2b$o2b!')
    expect(gs.noNumbers()).to.equal('boo$obb$obb!');
  });

  it("toArray() returns array representation of state", () => {
    let gs = new GameState('b2o$o2b$o2b!')
    expect(gs.toArray()).to.deep.equal(['boo','obb','obb']);
  });
  
  it("arrayToNoNumbers() converts array to noNumbers representation", () => {
    let gs = new GameState('b2o$o2b$o2b!')
    expect(gs.arrayToNoNumbers(gs.toArray())).to.equal('boo$obb$obb!');
  });

  it("NoNumbersToString() converts noNumbers representation to string", () => {
    let gs = new GameState('b2o$o2b$o2b!')
    expect(gs.noNumbersToString(gs.arrayToNoNumbers(gs.toArray()))).to.equal('b2o$o2b$o2b!');
  });

  it("NoNumbersToString() converts noNumbers to string", () => {
    let gs = new GameState('b2o3b$3o2b$3bo2b!')
    expect(gs.noNumbersToString(gs.arrayToNoNumbers(gs.toArray()))).to.equal('b2o3b$3o2b$3bo2b!');
  });

});
