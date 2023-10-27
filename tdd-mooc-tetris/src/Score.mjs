export class Score {
  score;

  constructor() {
    this.score = 0;
  }

  update(){
  this.score += 40;

  }
  getScore(){
    return this.score;
  }
}
