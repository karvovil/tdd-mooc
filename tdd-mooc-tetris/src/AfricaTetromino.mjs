import { RotatingShape } from "./RotatingShape.mjs";

export class AfricaTetromino {

  static T_ROTATIONS = [
    new RotatingShape(
    `....
     TTT.
     .T..
     ....`
    ), 
    new RotatingShape( 
    `.T..
     .TT.
     .T..
     ....`
    ),
    new RotatingShape( 
     `....
      .T..
      TTT.
      ....`
    ), 
    new RotatingShape( 
     `.T..
      TT..
      .T..
      ....`
    )] 
  static I_ROTATIONS = [
    new RotatingShape( 
     `....
      IIII
      ....
      ....`
    ), 
    new RotatingShape(
     `..I.
      ..I.
      ..I.
      ..I.`
    )]
  static O_ROTATIONS = new RotatingShape( 
    `....
     .OO.
     .OO.
     ....`
  )
  static T_SHAPE = this.T_ROTATIONS[0]
  static I_SHAPE = this.I_ROTATIONS[0]
  static O_SHAPE = this.O_ROTATIONS[0]
}