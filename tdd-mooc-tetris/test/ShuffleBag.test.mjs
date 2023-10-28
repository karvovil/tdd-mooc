import { expect } from "chai";
import { ShuffleBag } from "../src/ShuffleBag.mjs";
import { Tetromino } from "../src/Tetromino.mjs";


describe("ShuffleBag that has one value", () => {
  let bag;
  beforeEach(() => {
    bag = new ShuffleBag([Tetromino.T_SHAPE]);
  });

  it("gives out the value", () => {
    expect(bag.pull()).to.equal(Tetromino.T_SHAPE);
  })

});
