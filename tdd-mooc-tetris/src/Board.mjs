export class Board {
  width;
  height;
  state;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.state = `...\n...\n...\n`;
  }
  
  toString() {
    return this.state;
  }
  
  drop(arg) {
    this.state = `.X.\n...\n...\n`;
  }
  
  tick() {
    this.state = `...\n.X.\n...\n`;
  }
}
