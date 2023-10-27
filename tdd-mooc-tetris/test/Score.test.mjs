import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Score } from "../src/Score.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Score", () => {
  let board;
  let score;
  beforeEach(() => {
    board = new Board(10,6);
    score = new Score();
    board.addSubscriber(score);
  });

  it("starts from zero", () => {
    expect(score.getScore()).to.equal(0);
  })

  it("increases with line clear", () => {
    board.setBoard(
      '..........\n..........\n..........\n..........\n..........\nIIIIIIII..\n');
    
    board.drop(Tetromino.O_SHAPE);
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    fallToBottom(board)
    console.log((score.getScore()));
    expect(score.getScore()).to.equal(40);
  })
  xit("increases 2 with two line clears", () => {
    board.setBoard('..........\n..........\n..........\n..........\nIIIIIIII..\nIIIIIIII..\n');
    
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       IIIIIIII..
       IIIIIIII..`
    );
    board.drop(Tetromino.O_SHAPE);
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
  })

});
