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
      const block = this.stoppedBlocks.find(b => b.xy.y === h)
      if (block){
        s +=  `.${block.name}.\n`;
      }else if(this.current?.xy.y ===  h){
        s += `.${this.current.name }.\n` ;
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
      this.current = {name: arg,
                      xy:   {x:1,
                             y:0
                            }
                     }
      this.falling = true;
    }
  }

  tick() {
    if(
      this.current.xy.y >= this.height -1 ||
      this.stoppedBlocks.some(b => b.xy.y -1 === this.current.xy.y)
    ){
      this.falling = false;
      this.stoppedBlocks.push(this.current)
    }else{
      this.current.xy.y++;
    }
  }

  hasFalling() {
    return this.falling;
  }
}
