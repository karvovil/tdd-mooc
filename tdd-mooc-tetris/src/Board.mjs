export class Board {
  width;
  height;
  currentBlock;
  currentBlockX;
  currentBlockY;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  toString() {    
    let s = ""
    for(let h = 0; h < this.height; h++){
      s += this.currentBlockY === h ? '.X.\n' : '...\n';
    }
    return s;
  }
  
  drop(arg){
    if(arg === 'Y') {
      throw new Error("already falling");
    }
    this.currentBlock = arg
    this.currentBlockX = 1
    this.currentBlockY = 0
  }

  tick() {
      this.currentBlockY++;
    }

  hasFalling() {
    return true;
  }
}
