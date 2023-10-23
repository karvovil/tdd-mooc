import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}
describe("Falling tetromino", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("can be moved left", () => {
    board.drop(Tetromino.T_SHAPE);
    board.moveLeft();

    expect(board.toString()).to.equalShape(
      `...T......
       ..TTT.....
       ..........
       ..........
       ..........
       ..........`
    );
  })
  it("can be moved right", () => {
    board.drop(Tetromino.T_SHAPE);
    board.moveRight();

    expect(board.toString()).to.equalShape(
      `.....T....
       ....TTT...
       ..........
       ..........
       ..........
       ..........`
    );
  })
  it("can be moved down", () => {
    board.drop(Tetromino.T_SHAPE);
    board.tick();

    expect(board.toString()).to.equalShape(
      `..........
       ....T.....
       ...TTT....
       ..........
       ..........
       ..........`
    );
  })
  it("cannot be moved left beyond the board", () => {
    board.drop(Tetromino.T_SHAPE);
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();

    expect(board.toString()).to.equalShape(
      `.T........
       TTT.......
       ..........
       ..........
       ..........
       ..........`
    );
  })
  it("cannot be moved right beyond the board", () => {
    board.drop(Tetromino.T_SHAPE);
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();

    expect(board.toString()).to.equalShape(
      `........T.
       .......TTT
       ..........
       ..........
       ..........
       ..........`
    );
  })
  it("cannot be moved down beyond the board", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);
    board.tick();

    expect(board.toString()).to.equalShape(
     `..........
      ..........
      ..........
      ..........
      ....T.....
      ...TTT....`
    );
  })
  it("cannot be moved left through other blocks", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);
    board.drop(Tetromino.T_SHAPE);
    board.moveRight()
    board.moveRight()
    board.tick();
    board.tick();
    board.tick();
    board.moveLeft();
    
    expect(board.toString()).to.equalShape(
      `..........
      ..........
      ..........
      ......T...
      ....TTTT..
      ...TTT....`
      );
      
  })
  it("cannot be moved right through other blocks", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);
    board.drop(Tetromino.T_SHAPE);
    board.moveLeft()
    board.moveLeft()
    board.tick();
    board.tick();
    board.tick();
    board.moveRight();
    
    expect(board.toString()).to.equalShape(
      `..........
      ..........
      ..........
      ..T.......
      .TTTT.....
      ...TTT....`
      );
      
  })
  it("it cannot be moved down through other blocks", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);
    board.drop(Tetromino.T_SHAPE);
    board.moveLeft()
    board.moveLeft()
    board.tick();
    board.tick();
    board.tick();
    board.moveRight();
    
    expect(board.toString()).to.equalShape(
      `..........
      ..........
      ..........
      ..T.......
      .TTTT.....
      ...TTT....`
      );
      
  })
})
