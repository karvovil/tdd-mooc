export class RotatingShape {
  wut;

  constructor(str) {
    this.wut = str.replace("     ", "").replace("     ", "") + "\n";
  }

  toString(){
    return this.wut;
  }
  
}