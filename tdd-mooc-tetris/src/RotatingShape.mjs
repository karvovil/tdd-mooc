import { Rotations } from "./Rotations.mjs";

export class RotatingShape {
  shape;
  rotations;
  rotationIndex;

  constructor(str) {
    let newStr = str;
    while( newStr.indexOf('     ') >= 0 ){
      newStr = newStr.replace('     ', '');
    }
    if (newStr.slice(-1) !== '\n'){
      newStr = newStr + '\n'
    }
    this.shape = newStr

    switch(str.match(/[a-zA-Z]/).pop()){
      case 'I':
        this.rotations = Rotations.I_ROTATIONS;
        break;
      case 'T':
        this.rotations = Rotations.T_ROTATIONS;
        break;
      case 'O':
        this.rotations = Rotations.O_ROTATIONS;
        break;
      default:
        this.rotations = []
    }
    this.rotationIndex = this.rotations.indexOf(this.shape)
  };

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
    const newIndex = 
    this.rotationIndex === 0
    ? this.rotations.length -1 : (this.rotationIndex -1)

    if (this.rotations){
      return new RotatingShape(this.rotations[newIndex])
    }
  }

  rotateLeft() {
    const newIndex = 
      this.rotationIndex === (this.rotations.length -1)
      ? 0 : (this.rotationIndex +1)

    if (this.rotations){
      return new RotatingShape(
        this.rotations[newIndex]
      )
    }
  }
}