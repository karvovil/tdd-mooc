export class ShuffleBag {
  values;
  spent;

  constructor(values){
    this.values = this.shuffle(values);
    this.spent = [];
  }

  pull(){
    if (this.values.length === 0){
      this.values = this.shuffle(this.spent);
      this.spent = [];
    }
    const popped = this.values.pop()
    this.spent.push(popped);  
    return popped;      
  }

  shuffle(arr){
    return arr.sort( () => .5 - Math.random() );
  }

}