import { RotatingShape } from "./RotatingShape.mjs";

export class Board {
  width;
  height;
  falling;
  shape;
  position;
  board;
  subscribers;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = false;
    this.board = (".".repeat(width) +'\n').repeat(height);
    this.subscribers = [];
  }
  setBoard(board){
    this.board = board
  }

  addSubscriber(subscriber){
    this.subscribers.push(subscriber)
  }

  toString() {    
    return this.shapeToBoard(this.shape, this.position)
  }

  changeBoard(shape, position){
    if (!this.collision(shape, position)){
      this.shape = shape;
      this.position = position;
      return true;
    }
    return false;
  }

  drop(block){
    if(this.falling) {
      throw new Error("already falling");
    }
    this.shape = (typeof block === 'string') ?
    new RotatingShape(block) : block;
    
    const yCoord = (typeof block === 'string') ? 0 : -1
    
    this.position = { x: (this.center() - Math.floor((this.shape.toString().split("\n").length)/2))+1, y: yCoord };
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
      this.clearLines()
    }else{
      this.position = nextPosition;
    }
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

  clearLines(){
    let boardRows = this.board.split("\n");
    let newBoard = '';
    for (let y = 0; y < this.height; y++) {
      if (boardRows[y].indexOf('.') < 0){
        newBoard = ".".repeat(this.width) +'\n' + newBoard;
      }else{
        newBoard += boardRows[y] + '\n';
      }
    }
    this.board = newBoard;
  }

  moveLeft(){
    const newPosition = {
      x: this.position.x -1,
      y: this.position.y
    }
    this.changeBoard(this.shape, newPosition)
  }

  moveRight(){
    const newPosition = {
      x: this.position.x +1,
      y: this.position.y
    }
    this.changeBoard(this.shape, newPosition)
  }

  rotateLeft(){
    if (!this.changeBoard(this.shape.rotateLeft(), this.position)){
      this.wallKick(this.shape.rotateLeft());
    }
  }

  rotateRight(){
    if (!this.changeBoard(this.shape.rotateRight(), this.position)){
      this.wallKick(this.shape.rotateRight());
    }
  }

  wallKick(rotatedShape){
    const oneRight = {
      x: this.position.x +1,
      y: this.position.y
    }
    const oneLeft = {
      x: this.position.x -1,
      y: this.position.y
    }
    if(!this.changeBoard(rotatedShape, oneRight)){
      this.changeBoard(rotatedShape, oneLeft);
    }
  }

  collision(newShape, newPosition){
    return (this.shapeToBoard(this.shape, this.position).split(".").length
    < this.shapeToBoard(newShape, newPosition).split(".").length)
  }

  hasFalling(){
    return this.falling;
  }

  center(){
    return this.width % 2 == 0
    ? Math.floor(this.width/2)-1
    : Math.floor(this.width/2)
  }
}
