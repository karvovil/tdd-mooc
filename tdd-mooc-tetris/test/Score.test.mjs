import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { ScoringSystem } from "../src/ScoringSystem.mjs";
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
    board = new Board(10,8);
    score = new ScoringSystem();
    board.addSubscriber(score);
  });

  it("starts from zero", () => {
    expect(score.getScore()).to.equal(0);
  })

  it("increases with line clear", () => {
    board.setBoard(
      '..........\n..........\n..........\n..........\n..........\n..........\n..........\nIIIIIIII..\n');
    
    board.drop(Tetromino.O_SHAPE);
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    fallToBottom(board)
    
    expect(score.getScore()).to.equal(40);
  })
  it("increases by 100 with two line clears", () => {
    board.setBoard('..........\n..........\n..........\n..........\n..........\n..........\nIIIIIIII..\nIIIIIIII..\n');
    board.drop(Tetromino.O_SHAPE);
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    fallToBottom(board);

    expect(score.getScore()).to.equal(100);
  })
  it("increases by 300 with three line clears", () => {
    board.setBoard('..........\n..........\n..........\n..........\n..........\nIIIIIIIII.\nIIIIIIIII.\nIIIIIIIII.\n');
    board.drop(Tetromino.I_SHAPE);
    board.tick();
    board.rotateRight()
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    fallToBottom(board);

    expect(score.getScore()).to.equal(300);
  })
  it("increases by 1200 with four line clears", () => {
    board.setBoard('..........\n..........\n..........\n..........\nIIIIIIIII.\nIIIIIIIII.\nIIIIIIIII.\nIIIIIIIII.\n');
    board.drop(Tetromino.I_SHAPE);
    board.tick();
    board.rotateRight()
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    fallToBottom(board);

    expect(score.getScore()).to.equal(1200);
  })

});