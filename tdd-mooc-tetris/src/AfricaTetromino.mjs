import { RotatingShape } from "./RotatingShape.mjs";

export class AfricaTetromino {

  static T_ROTATIONS = [
    `....
     TTT.
     .T..
     ....`
    , 
    `.T..
     .TT.
     .T..
     ....`
    ,
     `....
      .T..
      TTT.
      ....`
    , 
     `.T..
      TT..
      .T..
      ....`
    ] 
  static I_ROTATIONS = [
     `....
      IIII
      ....
      ....`
    , 
     `..I.
      ..I.
      ..I.
      ..I.`
    ]
  static O_ROTATIONS = [
    `....
    .OO.
    .OO.
    ....`
  ] 
  static T_SHAPE = new RotatingShape(this.T_ROTATIONS[0])
  static I_SHAPE = new RotatingShape(this.I_ROTATIONS[0])
  static O_SHAPE = new RotatingShape(this.O_ROTATIONS[0])
}