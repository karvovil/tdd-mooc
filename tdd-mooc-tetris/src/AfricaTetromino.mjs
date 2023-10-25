import { RotatingShape } from "./RotatingShape.mjs";

export class AfricaTetromino {

  static T_SHAPE = new RotatingShape( 
    `....
     TTT.
     .T..
     ....`
  )
  static I_SHAPE = new RotatingShape( 
    `....
     IIII
     ....
     ....`
  )
  static O_SHAPE = new RotatingShape( 
    `...
     .OO.
     .OO.
     ....`
  )
}