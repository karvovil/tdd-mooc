export class Score {
  score;

  constructor() {
    this.score = 0;
  }

  update(linesCleared){
    switch(linesCleared){
      case 1:
        this.score += 40;
        break;
      case 2:
        this.score += 100;
        break;
      default:
        this.score += 0;
    }  
  }
  getScore(){
    return this.score;
  }
}
