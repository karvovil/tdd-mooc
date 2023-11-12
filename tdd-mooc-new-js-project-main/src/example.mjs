import { GameState } from "./GameState.mjs";
import * as fs from 'fs';
import { readFile } from "node:fs/promises";

export async function game(inFilePath, n) {
  const outFilePath = "./out.txt"
  let contents;
  try {
    contents = await readFile(inFilePath, { encoding: "utf8" });
  } catch (e) {console.log(e)}
  if ( contents.match(/(?![bo$1234567890!])./g) ){
    throw new Error('not valid')
  }
  let gs = new GameState(contents);

  await fs.writeFile(outFilePath, gs.toString(), (err) => {
    console.log(err || "done");
  });

}
