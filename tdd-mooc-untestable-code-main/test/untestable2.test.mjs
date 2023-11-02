import { expect } from "chai";
import { diceHandValue } from "../src/untestable2.mjs";

describe("Untestable 2: a dice game", () => {
  it("returns all possible values", () => {
    let rolls = [];
    for (let index = 0; index < 1000; index++) {
      rolls.push(diceHandValue()); 
    }
    expect(rolls).to.include.members([2,3,4,5,6,101,102,103,104,105,106]);
  });

  it("has some randomness", () => {
    let rolls1 = [];
    let rolls2 = [];
    for (let index = 0; index < 100; index++) {
      rolls1.push(diceHandValue()); 
      rolls2.push(diceHandValue()); 
    }
    expect(rolls1).to.not.eql(rolls2);
  });
});
