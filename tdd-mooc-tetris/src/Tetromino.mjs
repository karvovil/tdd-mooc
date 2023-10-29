import { RotatingShape } from "./RotatingShape.mjs";
import { Rotations } from "./Rotations.mjs";

export class Tetromino {
  static T_SHAPE = new RotatingShape(Rotations.T_ROTATIONS[0])
  static I_SHAPE = new RotatingShape(Rotations.I_ROTATIONS[0])
  static O_SHAPE = new RotatingShape(Rotations.O_ROTATIONS[0])
  static L_SHAPE = new RotatingShape(Rotations.L_ROTATIONS[0])
  static J_SHAPE = new RotatingShape(Rotations.J_ROTATIONS[0])
  static S_SHAPE = new RotatingShape(Rotations.S_ROTATIONS[0])
  static Z_SHAPE = new RotatingShape(Rotations.Z_ROTATIONS[0])
}