import { expect } from "chai";
import { ShuffleBag } from "../src/ShuffleBag.mjs";
import { Tetromino } from "../src/Tetromino.mjs";


describe("ShuffleBag that has one tetrinome", () => {
  let bag;
  beforeEach(() => {
    bag = new ShuffleBag([Tetromino.T_SHAPE]);
  });

  it("gives out the value", () => {
    expect(bag.pull()).to.equal(Tetromino.T_SHAPE);
  })

  it("gives out the value twice", () => {
    expect(bag.pull()).to.equal(Tetromino.T_SHAPE);
    expect(bag.pull()).to.equal(Tetromino.T_SHAPE);
  })

});

describe("ShuffleBag that has three tetrinomes", () => {
  let bag;

  beforeEach(() => {
    bag = new ShuffleBag([
      Tetromino.T_SHAPE,
      Tetromino.I_SHAPE,
      Tetromino.O_SHAPE,
    ]);
  });

  it("gives out one of the tetrinomes", () => {
    expect(bag.pull()).to.be.oneOf([
      Tetromino.T_SHAPE,
      Tetromino.I_SHAPE,
      Tetromino.O_SHAPE,
    ]);
  })

  it("gives out all of the tetrinomes", () => {
    let manyPulls = [];
    for(let i = 0; i < 100; i++){
      manyPulls.push(bag.pull());
    }
    expect(manyPulls).to.include.members([
      Tetromino.T_SHAPE,
      Tetromino.I_SHAPE,
      Tetromino.O_SHAPE,
    ]);
  })

  it("has randomness", () => {
    let manyPulls1 = [];
    let manyPulls2 = [];

    for(let i = 0; i < 100; i++){
      manyPulls1.push(bag.pull());
    }
    for(let i = 0; i < 100; i++){
      manyPulls2.push(bag.pull());
    }
    expect(manyPulls1).to.not.eql(manyPulls2);
  })


});
