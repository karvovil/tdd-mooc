import { expect } from "chai";
import { game } from "../src/example.mjs";

describe("Game", () => {
  it("returns a string", () => {
    expect(game('')).to.be.a('string');
  });

  it("first line of input has only numbers and b, o and $ -chars", () => {
    expect(() => game('abof\nb2o')).to.throw("not valid");
  });
});
