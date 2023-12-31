import { expect } from "chai";
import { game } from "../src/example.mjs";
import * as fs from 'fs';

const inFilePath = "./build/in.txt"
const outFilePath = "./out.txt"

describe("Game get's valid input", () => {
  beforeEach(() => {

    const inputContent = 'bob$2bo$3o!'

    fs.writeFileSync(inFilePath, inputContent, (err) => {
      console.log(err || "done");
    });
  });

  afterEach(() => {
    fs.unlinkSync(inFilePath);
    fs.unlinkSync(outFilePath);
  });
  
  it("writes output correctly", () => {
    game(inFilePath, 0);
    let contents;
    try {
      contents = fs.readFileSync(outFilePath, { encoding: "utf8" });
    } catch (e) {console.log(e)}

    expect(contents).to.equal('bob$2bo$3o!');
  });

  it("writes output correctly after a tick", () => {
    game(inFilePath, 1);
    let contents;
    try {
      contents = fs.readFileSync(outFilePath, { encoding: "utf8" });
    } catch (e) {console.log(e)}

    expect(contents).to.equal('5b$5b$bobob$2b2ob$2bo2b!');
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

    fs.writeFileSync(inFilePath, inputContent, (err) => {
      console.log(err || "done");
    });
  });
  afterEach(() => {
    fs.unlinkSync(inFilePath);
  });
  
  it("throws error", async () => {
    let contents;
    try {
      contents = fs.readFileSync(outFilePath, { encoding: "utf8" });
    } catch (e) {console.log(e)}

    expect(() => game(inFilePath, 0)).to.throw("not valid");
  });
});
