import { Tetromino } from "./Tetromino.mjs";

export class Board {
  width;
  height;
  stoppedBlocks;
  current;
  currentShape;
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
  
  drop(arg){
    let coords;
    if(this.falling) {
      throw new Error("already falling");
    }else if(arg === Tetromino.T_SHAPE){
      this.currentShape = Tetromino.T_SHAPE
      this.currentPosition = {x: this.center(), y: 0}
      this.current = {name: 'T', coords: this.shapeCoords() }
    }else{
      this.current = {name: arg,
                      coords: [{
                        x: this.center(),
                        y: 0}]
      }
      this.falling = true;
    }
  }

  tick() {
    const nextCoords = this.current.coords.map(({ x, y }) => ({ x: x, y: y+1 }))
    if(
      this.current.coords.some (c => c.y >= this.height -1) ||
      this.hasIntersection(this.stoppedBlocks.flatMap(b => b.coords ), nextCoords)
      ){
        this.falling = false;
        this.stoppedBlocks.push(this.current)
        
      }else{
        this.current.coords = nextCoords;
    }
  }
  equal(c1, c2){
    return c1.x === c2.x && c1.y === c2.y
  }
  hasCoord(a, c1){
    return a.some(c => this.equal(c, c1));
  }
  hasIntersection(a1, a2){
    return a1.some(c => this.hasCoord(a2, c))
  }
  hasFalling() {
    return this.falling;
  }
  center(){
    return this.width % 2 == 0 ? Math.floor(this.width/2)-1 : Math.floor(this.width/2)
  }
  shapeCoords(){
    const coords = [
      {
        x: this.center(),
        y: 0},
      {
        x: this.center()-1,
        y: 1
      },
      {
        x: this.center(),
        y: 1
      },
      {
        x: this.center()+1,
        y: 1
      }
    ]
      return coords;
  }
  shapeToCoords(){
    let coords = [];
    
    return coords
  }
}
