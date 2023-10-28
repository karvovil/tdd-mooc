export class ShuffleBag {
  values;
  spent;

  constructor(values){
    this.values = values;
    this.spent = [];
  }

  pull(){
    return this.values.pop()
  }
}