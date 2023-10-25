import { RotatingShape } from "./RotatingShape.mjs";
import { Tetromino } from "./Tetromino.mjs";

export class Board {
  width;
  height;
  falling;
  shape;
  position;
  board;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = false;
    this.board = (".".repeat(width) +'\n').repeat(height);
  }
  
  toString() {    
    return this.shapeToBoard(this.shape, this.position)
  }
  
  shapeToBoard(shape, position){
    if (!shape || !position){
      return this.board
    }
    let newBoard = '';
    const boardRows = this.board.split("\n");
    const shapeRows = shape?.toString().split("\n");
    const shapelength = shapeRows.length -1
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const shapeChar = shapeRows[y - position.y]?.charAt(x - position.x);
        const boardChar = boardRows[y].charAt(x)
        if(
          x >= position?.x && x < position.x + shapelength &&
          y >= position.y && y < position.y + shapelength &&
          shapeChar != '.'
        ){
          newBoard += shapeChar
        }else{
          newBoard += boardChar;
        }
      }
      newBoard += '\n';
    }
    return newBoard;
  }

  changeBoard(shape, position){
    if (!this.collision(shape, position)){
      this.shape = shape;
      this.position = position;
    }
  }
  collision(newShape, newPosition){
    return (this.shapeToBoard(this.shape, this.position).split(".").length
    < this.shapeToBoard(newShape, newPosition).split(".").length)
  }
  drop(block){
    if(this.falling) {
      throw new Error("already falling");
    }
    this.shape = (typeof block === 'string') ?
      new RotatingShape(block) : block;

    this.position = { x: (this.center() - Math.floor((this.shape.toString().split("\n").length)/2))+1, y: 0 };
    this.falling = true;
  }

  tick() {
    const nextPosition = {
      x: this.position.x,
      y: this.position.y+1
    };
    if (this.collision(this.shape, nextPosition)){
      this.falling = false;
      this.board = this.shapeToBoard(this.shape, this.position)
      this.position = {}
      this.shape = {}
    }else{
      this.position = nextPosition;
    }
  }
  moveLeft(){
    const newPosition = {
      x: this.position.x -1,
      y: this.position.y
    }
    if(!this.collision(this.shape, newPosition)){
      this.position = newPosition
    } 
  }
  moveRight(){
    const newPosition = {
      x: this.position.x +1,
      y: this.position.y
    }
    if(!this.collision(this.shape, newPosition)){
      this.position = newPosition
    } 
  }
  rotateLeft(){
    if(!this.collision(this.shape.rotateLeft(), this.position)){
      this.shape = this.shape.rotateLeft();
    }
  }
  rotateRight(){
    if(!this.collision(this.shape.rotateRight(), this.position)){
      this.shape = this.shape.rotateRight();
    }
  }

  center(){
    return this.width % 2 == 0
      ? Math.floor(this.width/2)-1
      : Math.floor(this.width/2)
  }
  hasFalling(){
    return this.falling;
  }
}
