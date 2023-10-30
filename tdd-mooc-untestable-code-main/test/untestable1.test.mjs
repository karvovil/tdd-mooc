import { expect } from "chai";
import { daysUntilChristmas } from "../src/untestable1.mjs";

describe("Untestable 1: days until Christmas", () => {
  it("todo", () => {
    const now = new Date("2015-12-23");
    expect(daysUntilChristmas(now)).to.equal(2);
  });
});
