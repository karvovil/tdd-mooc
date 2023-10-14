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
    const r1 = lines.reduce((a, l) => a + l.charAt(0), '').split('').reverse().join('')  + '\n';
    const r2 = lines.reduce((a, l) => a + l.charAt(1), '').split('').reverse().join('')  + '\n';
    const r3 = lines.reduce((a, l) => a + l.charAt(2), '').split('').reverse().join('')  + '\n';
    return r1+r2+r3;
  }
  
}