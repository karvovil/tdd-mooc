export class Board {
  width;
  height;
  state;
  currentBlock;
  currentBlockX;
  currentBlockY;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.state = `...\n...\n...\n`;
  }
  
  toString() {    
    let s = ""
    for(let h = 0; h < this.height; h++){
      s += this.currentBlockY === h ? '.X.\n' : '...\n';
    }
    return s;
  }
  
  drop(arg){
    this.currentBlock = arg
    this.currentBlockX = 1
    this.currentBlockY = 0
    const newState = `.${this.currentBlock}.\n...\n...\n`;
    if(newState.includes('Y') ){
      throw new Error("already falling");
    }else{
      this.state = newState
    }
  }

  tick() {
      this.currentBlockY++;
    }

  hasFalling() {
    return true;
  }
}
