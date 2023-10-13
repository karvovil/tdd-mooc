export class Board {
  width;
  height;
  stoppedBlocks;
  previousBlocks;
  previousBlock;
  previousBlockX;
  previousBlockY;
  currentBlock;
  currentBlockX;
  currentBlockY;
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
      if (this.previousBlockY === h){
        s +=  `.${this.previousBlock}.\n`;
      }else if(this.currentBlockY ===  h){
        s += `.${this.currentBlock }.\n` ;
      }
      else{
        s+='...\n'
      }
    }
    return s;
  }
  
  drop(arg){
    if(this.falling) {
      throw new Error("already falling");
    }else{
      this.current = {block: arg,
                      x:1,
                      y:0}
      this.falling = true;
      this.currentBlock = arg
      this.currentBlockX = 1
      this.currentBlockY = 0
    }
  }

  tick() {
    if(this.currentBlockY >= this.height -1){
      this.falling = false;
      this.previousBlock = this.currentBlock ;
      this.previousBlockX= this.currentBlockX ;
      this.previousBlockY= this.currentBlockY;
      this.stoppedBlocks += this.current
    }else{
      this.currentBlockY++;
    }
  }

  hasFalling() {
    return this.falling;
  }
}
