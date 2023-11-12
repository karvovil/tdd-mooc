import { expect } from "chai";
import { game } from "../src/example.mjs";
import * as fs from 'fs';

const inFilePath = "./build/in.txt"
const outFilePath = "./build/out.txt"

describe("Game get's valid input", () => {
  beforeEach(() => {
    if (!fs.existsSync('./build')){
      fs.mkdirSync('./build');
    }
    const inputContent = 'bob$2bo$3o!\n#C '

    fs.writeFile(inFilePath, inputContent, (err) => {
      console.log(err || "done");
    });
  });

  afterEach(() => {
    fs.unlinkSync(inFilePath);
    fs.unlinkSync(outFilePath);
  });
  
  it("writes output correctly", async () => {
    game(inFilePath, 0)
    let contents;
    try {
      contents = await readFile(outFilePath, { encoding: "utf8" });
    } catch (e) {console.log(e)}

    expect(contents).to.equal('bob$2bo$3o!\n#C ');
  });
});

describe("Game get's invalid input", () => {
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
    game(inFilePath, 0);
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
});
