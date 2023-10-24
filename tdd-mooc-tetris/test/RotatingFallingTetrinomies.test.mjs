import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

describe("BBBLLBOSOO", () => {
  let board;
  beforeEach(() => {
    board = new Board(9,6);
  });

  it("adfsdasdasd", () => {
    console.log('empty'+'\n'+board.shapeToBoard());
    board.drop(Tetromino.T_SHAPE);
    console.log('drop'+'\n'+board.shapeToBoard(board.shape, board.position));
    board.tick()
    console.log('1'+'\n'+board.shapeToBoard(board.shape, board.position));
    board.tick()
    console.log('2'+'\n'+board.shapeToBoard(board.shape, board.position));
    board.tick()
    console.log('3'+'\n'+board.shapeToBoard(board.shape, board.position));
    board.tick()
    console.log('4'+'\n'+board.shapeToBoard(board.shape, board.position));
    board.tick()
    console.log('5'+'\n'+board.shapeToBoard(board.shape, board.position));
    board.drop(Tetromino.I_SHAPE);
    console.log('drop'+'\n'+board.shapeToBoard(board.shape, board.position));
    board.tick()
    console.log('1'+'\n'+board.shapeToBoard(board.shape, board.position));
    board.tick()
    console.log('2'+'\n'+board.shapeToBoard(board.shape, board.position));
    board.tick()
    console.log('2'+'\n'+board.shapeToBoard(board.shape, board.position));
    board.tick()
    console.log('2'+'\n'+board.shapeToBoard(board.shape, board.position));
    board.tick()
    console.log('2'+'\n'+board.shapeToBoard(board.shape, board.position));
  })
  
});
