import { expect } from "chai";
import { GameState } from "../src/GameState.mjs"; 

describe("GameState", () => {
  it("toString returns a string", () => {
    let gs = new GameState('bo$ob!')
    expect(gs.toString()).to.be.a('string');
  });

  it("toArray() returns array representation of state", () => {
    let gs = new GameState('b2o$o2b$o2b!')
    expect(gs.toArray()).to.deep.equal(['boo','obb','obb']);
  });
  
  it("NoNumbersToString() converts noNumbers representation to string", () => {
    let gs = new GameState('b2o$o2b$o2b!')
    expect(gs.arrayToString(gs.toArray())).to.equal('b2o$o2b$o2b!');
  });

  it("NoNumbersToString() converts noNumbers to string", () => {
    let gs = new GameState('b2o3b$3o2b$3bo2b!')
    expect(gs.arrayToString(gs.toArray())).to.equal('b2o3b$3o2b$3bo2b!');
  });

  it("tick() changes state to next generation of a dead board", () => {
    let gs = new GameState('3b$3b$3b!')
    gs.tick()
    expect(gs.toString()).to.equal('5b$5b$5b$5b$5b!');
  });

  it("tick() changes state to next generation of a 5x5 dead board", () => {
    let gs = new GameState('5b$5b$5b$5b$5b!')
    gs.tick()
    expect(gs.toString()).to.equal('7b$7b$7b$7b$7b$7b$7b!');
  });

});
