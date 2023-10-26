import { expect } from "chai";
import { Tetromino } from "../src/Tetromino.mjs";
import { AfricaTetromino } from "../src/AfricaTetromino.mjs";

function distinctOrientations(shape) {
  const distinct = new Set();
  let goingRight = shape;
  let goingLeft = shape;
  for (let i = 0; i < 10; i++) {
    distinct.add(goingRight.toString());
    goingRight = goingRight.rotateRight();
    distinct.add(goingLeft.toString());
    goingLeft = goingLeft.rotateLeft();
  }
  console.log(distinct);
  return distinct;
}

describe("The T shape", () => {
  const shape = AfricaTetromino.T_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `....
       TTT.
       .T..
       ....`
    );
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `.T..
       TT..
       .T..
       ....`
    );
  });

  it("can be rotated left/counter-clockwise", () => {
    expect(shape.rotateLeft().toString()).to.equalShape(
      `.T..
       .TT.
       .T..
       ....`
    );
  });

  it("has 4 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(4);
  });
});

describe("The I shape", () => {
  const shape = AfricaTetromino.I_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `....
       IIII
       ....
       ....`
    );
  });

  it("can be rotated right/clockwise", () => {
    expect(shape.rotateRight().toString()).to.equalShape(
      `..I.
       ..I.
       ..I.
       ..I.`
    );
  });

  it("can be rotated left/counter-clockwise", () => {
    console.log(shape);
    expect(shape.rotateLeft().toString()).to.equalShape(
      `..I.
       ..I.
       ..I.
       ..I.`
    );
  });

  it("has 2 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(2);
  });
});

describe("The O shape", () => {
  const shape = AfricaTetromino.O_SHAPE;

  it("initial orientation", () => {
    expect(shape.toString()).to.equalShape(
      `....
       .OO.
       .OO.
       ....`
    );
  });

  it("cannot be rotated right/clockwise", () => {
    expect(shape.toString()).to.equalShape(
      `....
       .OO.
       .OO.
       ....`
    );
  });

  it("cannot be rotated left/counter-clockwise", () => {
    expect(shape.toString()).to.equalShape(
      `....
       .OO.
       .OO.
       ....`
    );
  });

  xit("has 1 distinct orientations", () => {
    expect(distinctOrientations(shape).size).to.equal(1);
  });
});
