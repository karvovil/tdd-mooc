import { RotatingShape } from "./RotatingShape.mjs";
import { Rotations } from "./Rotations.mjs";

export class Tetromino {
  static T_SHAPE = new RotatingShape(Rotations.T_ROTATIONS[0])
  static I_SHAPE = new RotatingShape(Rotations.I_ROTATIONS[0])
  static O_SHAPE = new RotatingShape(Rotations.O_ROTATIONS[0])
}