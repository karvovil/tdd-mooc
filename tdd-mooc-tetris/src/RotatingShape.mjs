export class RotatingShape {
  wut;

  constructor(str) {
    this.wut = str.replace("     ", "").replace("     ", "") + "\n";
  }

  toString(){
    return this.wut;
  }
  
  rotateRight() {
    const lines = this.wut.split("\n");
    let rotatedLines = [];
    for(let i = 0; i < 3; i++){
      rotatedLines.push(lines.reduce((a, l) => a + l.charAt(i), '').split('').reverse().join('')  + '\n');
    }
    return rotatedLines.join('');
  }
  
  rotateLeft() {
    const lines = this.wut.split("\n");
    let rotatedLines = [];
    rotatedLines.push(lines.reduce((a, l) => a + l.charAt(2), '') + '\n');
    rotatedLines.push(lines.reduce((a, l) => a + l.charAt(1), '') + '\n');
    rotatedLines.push(lines.reduce((a, l) => a + l.charAt(0), '') + '\n');
    return rotatedLines.join('');
  }
}