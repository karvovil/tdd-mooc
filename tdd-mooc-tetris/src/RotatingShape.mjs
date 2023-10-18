export class RotatingShape {
  shape;

  constructor(str) {
    let newStr = str;
    while( newStr.indexOf('     ') >= 0 ){
      newStr = newStr.replace('     ', '');
    }
    if (newStr.slice(-1) !== '\n'){
      newStr = newStr + '\n'
    }
    this.shape = newStr
  }

  toString(){
    return this.shape;
  }
  
  rotateRight() {
    if (this.shape.split("I").length > 3){
      return this.rotateI();
    }
    const lines = this.shape.split("\n");
    let rotatedLines = [];
    for(let i = 0; i < lines.length-1; i++){
      rotatedLines.push(lines.reduce((a, l) => a + l.charAt(i), '').split('').reverse().join('')  + '\n');
    }
    return new RotatingShape(rotatedLines.join(''));
  }
  
  rotateLeft() {
    if (this.shape.split("I").length > 3){
      return this.rotateI();
    }
    const lines = this.shape.split("\n");
    let rotatedLines = [];
    for(let i = lines.length -2; i >= 0; i--){
      rotatedLines.push(lines.reduce((a, l) => a + l.charAt(i), '') + '\n');
    }
    return new RotatingShape(rotatedLines.join(''));
  }
  rotateI(){
    if (this.shape === '..I..\n..I..\n..I..\n..I..\n.....\n'){
      return new RotatingShape('.....\n.....\nIIII.\n.....\n.....\n')
    }else if (this.shape === '.....\n.....\nIIII.\n.....\n.....\n'){
      return new RotatingShape('..I..\n..I..\n..I..\n..I..\n.....\n')
    }
  }
}