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
      if (this.stoppedBlocks.some(b => b.y === h)){
        s +=  `.X.\n`;
      }else if(this.current?.y ===  h){
        s += `.${this.current.block }.\n` ;
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
    }
  }

  tick() {
    if(this.current.y >= this.height -1){
      this.falling = false;
      this.stoppedBlocks.push(this.current)
    }else{
      this.current.y++;
    }
  }

  hasFalling() {
    return this.falling;
  }
}
