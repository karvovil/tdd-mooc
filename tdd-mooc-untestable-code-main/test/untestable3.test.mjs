import { expect } from "chai";
import { parsePeopleCsv } from "../src/untestable3.mjs";
import * as fs from 'fs';
// example input:
// Loid,Forger,,Male
// Anya,Forger,6,Female
// Yor,Forger,27,Female


describe("Untestable 3: CSV file parsing", () => {
  it("parses contents correctly", async () => {
    if (!fs.existsSync('./build')){
      fs.mkdirSync('./build');
    }
    const csvContent = 
    'Loid,Forger,,Male\nAnya,Forger,6,Female\nYor,Forger,27,Female'
    const filePath = "./build/people.csv"
    fs.writeFile(filePath, csvContent, (err) => {
      console.log(err || "done");
    });
    
    let contents;
    try {
      contents = await parsePeopleCsv("./build/people.csv") 
    } catch (e) {console.log(e)}

      expect(contents).to.deep.equal([
        { firstName: 'Loid', lastName: 'Forger', gender: 'm' },
        { firstName: 'Anya', lastName: 'Forger', gender: 'f', age: 6 },
        { firstName: 'Yor', lastName: 'Forger', gender: 'f', age: 27 }
      ]);

      fs.unlinkSync(filePath);
  });
});
