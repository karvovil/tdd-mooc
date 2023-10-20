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
      const block = this.stoppedBlocks.find(b => b.coords[0].y === h)
      if (block){
        s +=  `.${block.name}.\n`;
      }else if(this.current?.coords[0].y ===  h){
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
                      coords: [{
                                x:(this.width/2),
                                y:0
                              },]
                     }
      this.falling = true;
    }
  }

  tick() {
    if(
      this.current.coords[0].y >= this.height -1 ||
        this.stoppedBlocks.some(b => b.coords[0].y -1 === this.current.coords[0].y &&
          b.coords[0].x === this.current.coords[0].x)
      ){
        this.falling = false;
        this.stoppedBlocks.push(this.current)
        console.log(this.toString());
    }else{
      this.current.coords.map(coord =>  coord.y++);
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
  printRow(h){
    for(let x = 0; x < this.width; x++){
    }
  }
}
