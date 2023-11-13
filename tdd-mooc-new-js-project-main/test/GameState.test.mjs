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
  
  it("neighbours() should count number of alive neighbours of a cell when none alive", () => {
    let gs = new GameState('3b$3b$3b!')
    expect(gs.neighbours(0,0)).to.equal(0)
  });

  it("neighbours() should count number of alive neighbours of a cell when one is alive", () => {
    let gs = new GameState('o2b$3b$3b!')
    expect(gs.neighbours(0,0)).to.equal(1)
  });
  
  it("neighbours() should count number of alive neighbours of a cell when two are alive", () => {
    let gs = new GameState('2ob$3b$3b!')
    expect(gs.neighbours(1,0)).to.equal(2)
  });
  
  it("neighbours() should count number of alive neighbours of a cell when eight are alive", () => {
    let gs = new GameState('3o$3o$3o!')
    expect(gs.neighbours(2,2)).to.equal(8)
  });
  
  it("tick() changes state to next generation of block pattern", () => {
    let gs = new GameState('2o$2o!')
    gs.tick()
    expect(gs.toString()).to.equal('4b$b2ob$b2ob$4b!');
  });
  
  it("isAlive () tells if cell is alive in previous generation", () => {
    let gs = new GameState('2o$2o!')
    expect(gs.isAlive(0,0)).to.equal(false);
    expect(gs.isAlive(3,3)).to.equal(false);
    expect(gs.isAlive(1,1)).to.equal(true);
  });
  
  it("tick() changes state to next generation of a blinker pattern", () => {
    let gs = new GameState('bob$bob$bob!')
    gs.tick()
    expect(gs.toString()).to.equal('5b$5b$b3ob$5b$5b!');
  });

  it("tick() changes state to next generation of a glider pattern", () => {
    let gs = new GameState('bob$2bo$3o!')
    gs.tick()
    expect(gs.toString()).to.equal('5b$5b$bobob$2b2ob$2bo2b!');
  });
});
