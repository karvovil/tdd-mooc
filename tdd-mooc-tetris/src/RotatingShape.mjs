export class RotatingShape {
  shape;
  name;
  rotation;

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
  toBlock(){
    const rows = this.shape.split("\n");
    let coords = [];
    let name;
    for (let y = 0; y < rows.length; y++) {
      for (let x = 0; x < rows[y].length; x++) {
        const charAtXY = rows[y].charAt(x)
        if(charAtXY  != '.'){ 
          coords.push({x, y});
          name = charAtXY;
        }
      }        
    }
    return {name, coords}
  }
  rotateRight() {
    if (this.shape.split("I").length > 3){
      return this.rotateI();
    }
    if (this.shape.split("O").length > 3){
      return this;
    }
    const lines = this.shape.split("\n");
    let rotatedLines = [];
    for(let i = 0; i < lines.length-1; i++){
      rotatedLines.push(
        lines.reduce((a, l) =>  a + l.charAt(i), '')
        .split('').reverse().join('')  + '\n'
      );
    }
    return new RotatingShape(rotatedLines.join(''));
  }
  
  rotateLeft() {
    if (this.shape.split("I").length > 3){
      return this.rotateI();
    }
    if (this.shape.split("O").length > 3){
      return this;
    }
    const lines = this.shape.split("\n");
    let rotatedLines = [];
    for(let i = lines.length -2; i >= 0; i--){
      rotatedLines.push(
        lines.reduce((a, l) => a + l.charAt(i), '') + '\n'
      );
    }
    return new RotatingShape(rotatedLines.join(''));
  }
  rotateI(){
    return this.shape === '..I..\n..I..\n..I..\n..I..\n.....\n'
      ? new RotatingShape('.....\n.....\nIIII.\n.....\n.....\n')
      : new RotatingShape('..I..\n..I..\n..I..\n..I..\n.....\n')
  }
}