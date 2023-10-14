export class RotatingShape {
  wut;

  constructor(str) {
    this.wut = str;
  }

  toString(){
    return this.wut.replace("     ", "").replace("     ", "") + "\n";
  }
  
}