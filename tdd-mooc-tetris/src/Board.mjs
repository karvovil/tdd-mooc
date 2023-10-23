import { Tetromino } from "./Tetromino.mjs";

export class Board {
  width;
  height;
  stoppedBlocks;
  current;
  falling;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = false;
    this.stoppedBlocks = [];
  }
  
  toString() {    
    let s = ""
    for(let h = 0; h < this.height; h++){
      s += this.printRow(h)
    }
    return s;
  }
  printRow(y){
    let row = '';
    for(let x = 0; x < this.width; x++){
      const block = [...this.stoppedBlocks, this.current].find(
        b => b?.coords.some(coord => coord.x === x && coord.y === y) 
      );
      block ? row += block.name : row += '.'
    }
    return row + '\n';
  }
  
  drop(block){
    if(this.falling) {
      throw new Error("already falling");
    }
    if(block === Tetromino.T_SHAPE){
      this.current = this.toBoard(Tetromino.T_SHAPE.toBlock());
    }else{
      this.current = {name: block,
                      coords: [{
                        x: this.center(),
                        y: 0}]
      }
      this.falling = true;
    }
  }

  tick() {
    const nextCoords = this.current.coords.map(
      ({ x, y }) => ({ x, y: y+1 })
    )
    if(
      this.current.coords.some(c => c.y >= this.height -1) ||
      this.illegalPosition(nextCoords)
    ){
      this.falling = false;
      this.stoppedBlocks.push(this.current)
    }else{
      this.current.coords = nextCoords;
    }
  }
  moveLeft(){
    const newCoords = this.current.coords.map(({y,x}) => ({y, x:x-1}))
    if(
      newCoords.every(c => c.x >= 0) &&
      !this.illegalPosition(newCoords)
    ){
      this.current.coords = newCoords;
    } 
  }
  moveRight(){
    const newCoords = this.current.coords.map(({y,x}) => ({y, x:x+1}))
    if(
      newCoords.every(c => c.x < this.width) &&
      !this.illegalPosition(newCoords)
    ){
      this.current.coords = newCoords;
    } 
  }
  equal(c1, c2){
    return c1.x === c2.x && c1.y === c2.y;
  }
  hasCoord(arr, c1){
    return arr.some(c => this.equal(c, c1));
  }
  illegalPosition(arr){
    const stoppedCoords = this.stoppedBlocks.flatMap(b => b.coords);
    return stoppedCoords.some(c => this.hasCoord(arr, c));
  }
  hasFalling() {
    return this.falling;
  }
  center(){
    return this.width % 2 == 0
      ? Math.floor(this.width/2)-1
      : Math.floor(this.width/2)
  }

  toBoard(block){
    return {
      name: block.name,
      coords: block.coords.map(({x,y}) => ({
        x: x + this.center() -1,
        y: y 
      }))
    }
  }
}
