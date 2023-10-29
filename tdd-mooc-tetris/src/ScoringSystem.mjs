export class ScoringSystem {
  score;
  level

  constructor() {
    this.score = 0;
    this.level = 0;
  }

  nextLevel(){
    this.level++;
  }

  update(linesCleared){
    switch(linesCleared){
      case 1:
        this.score += (this.level +1) * 40;
        break;
      case 2:
        this.score += (this.level +1) * 100;
        break;
      case 3:
        this.score += (this.level +1) * 300;
        break;
      case 4:
        this.score += (this.level +1) * 1200;
        break;
    }  
  }
  
  getScore(){
    return this.score;
  }
}
