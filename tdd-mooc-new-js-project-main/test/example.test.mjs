import { expect } from "chai";
import { game } from "../src/example.mjs";

describe("Game", () => {
  it("returns a string", () => {
    expect(game('')).to.be.a('string');
  });

  it("first line of input has only numbers and b, o, $ and ! -chars", () => {
    expect(() => game('abof\nb2o')).to.throw("not valid");
  });
  it("returns a string if input string is valid", () => {
    expect(game('bob$2bo$3o!\n#C ')).to.be.a('string');
  });
});
