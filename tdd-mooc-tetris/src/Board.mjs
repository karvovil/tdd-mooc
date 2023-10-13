export class Board {
  width;
  height;
  currentBlock;
  currentBlockX;
  currentBlockY;
  falling;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.falling = false;
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
    }else{
      this.falling = true;
      this.currentBlock = arg
      this.currentBlockX = 1
      this.currentBlockY = 0
    }
  }

  tick() {
    if(this.currentBlockY >= this.height -1){
      this.falling = false;
    }else{
      this.currentBlockY++;
    }
  }

  hasFalling() {
    return this.falling;
  }
}
