import { expect } from "chai";
import { game } from "../src/example.mjs";
import * as fs from 'fs';
import { readFile } from "node:fs/promises";

const inFilePath = "./build/in.txt"
const outFilePath = "./out.txt"

describe("Game get's valid input", () => {
  beforeEach(() => {

    const inputContent = 'bob$2bo$3o!'

    fs.writeFile(inFilePath, inputContent, (err) => {
      console.log(err || "done");
    });
  });

  afterEach(() => {
  });
  
  it("writes output correctly", async () => {
    await game(inFilePath, 0)
    let contents;
    try {
      contents = await readFile(outFilePath, { encoding: "utf8" });
    } catch (e) {console.log(e)}

    expect(contents).to.equal('bob$2bo$3o!');
  });
});

/* describe("Game get's invalid input", () => {
  let gs;
  beforeEach(() => {
    if (!fs.existsSync('./build')){
      fs.mkdirSync('./build');
    }
    const inputContent = 
    'abof\nb2o'

    fs.writeFile(inFilePath, inputContent, (err) => {
      console.log(err || "done");
    });
  });
  afterEach(() => {
    fs.unlinkSync(inFilePath);
  });
  
  it("throws error", async () => {
    let contents;
    try {
      contents = await readFile(outFilePath, { encoding: "utf8" });
    } catch (e) {console.log(e)}

    expect(() => game(inFilePath, 0)).to.throw("not valid");
  });
}); */
