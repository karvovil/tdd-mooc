
export class GameState{
  state;

  constructor(state){
     this.state = state;
  }

	toString(){
		return this.state;
	}

	noNumbers(){
		return this.state.replace(/\d+./g, match =>
		match.slice(-1).repeat(Number(match.slice(0, -1)))
		); 
	}

	toArray() {
		return this.noNumbers().slice(0, -1).split('$')
	}

	arrayToNoNumbers(arr){
		return arr.join('$') + '!'
	}
}