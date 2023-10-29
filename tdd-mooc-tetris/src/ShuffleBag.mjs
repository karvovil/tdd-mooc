export class ShuffleBag {
  values;
  spent;

  constructor(values){
    this.values = values;
    this.spent = [];
  }

  pull(){
    if (this.values.length === 0){
      this.values = this.spent;
      this.spent = [];
    }
    const popped = this.values.pop()
    this.spent.push(popped);  
    return popped;      
  }
}