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
      const block = this.stoppedBlocks.find(b => b.coords.y === h)
      if (block){
        s +=  `.${block.name}.\n`;
      }else if(this.current?.coords.y ===  h){
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
      this.current = {name:   arg,
                      coords: {x: Math.floor(this.width/2),
                               y: 0
                              }
                     }
      this.falling = true;
    }
  }

  tick() {
    if(
      this.current.coords.y >= this.height -1 ||
        this.stoppedBlocks.some(b => b.coords.y -1 === this.current.coords.y &&
          b.coords.x === this.current.coords.x)
      ){
        this.falling = false;
        this.stoppedBlocks.push(this.current)
    }else{
      this.current.coords.y++;
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
  printRow(y){
    let row = '';
    for(let x = 0; x < this.width; x++){
      const block = [...this.stoppedBlocks, this.current].find(
        b => b?.coords.x === x && b?.coords.y === y 
      );
      block ? row += block.name : row += '.'
    }
    return row + '\n';
  }
}
