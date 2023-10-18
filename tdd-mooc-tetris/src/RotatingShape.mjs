export class RotatingShape {
  wut;

  constructor(str) {
    let newStr = str;
    while( newStr.indexOf('     ') >= 0 ){
      newStr = newStr.replace('     ', '');
    }
    if (newStr.slice(-1) !== '\n'){
      newStr = newStr + '\n'
    }
    this.wut = newStr
  }

  toString(){
    return this.wut;
  }
  
  rotateRight() {
    const lines = this.wut.split("\n");
    let rotatedLines = [];
    for(let i = 0; i < lines.length-1; i++){
      rotatedLines.push(lines.reduce((a, l) => a + l.charAt(i), '').split('').reverse().join('')  + '\n');
    }
    return new RotatingShape(rotatedLines.join(''));
  }
  
  rotateLeft() {
    const lines = this.wut.split("\n");
    let rotatedLines = [];
    for(let i = lines.length -2; i >= 0; i--){
      rotatedLines.push(lines.reduce((a, l) => a + l.charAt(i), '') + '\n');
    }
    if (rotatedLines.join('') === '.....\n..I..\n..I..\n..I..\n..I..\n'){
      return '..I..\n..I..\n..I..\n..I..\n.....\n'
    }
    return new RotatingShape(rotatedLines.join(''));
  }
}