import { expect } from "chai";
import { game } from "../src/example.mjs";

describe("Game", () => {
  it("returns a string", () => {
    expect(game('')).to.be.a('string');
  });
});
