
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

	noNumbersToString(nn){
		return nn.replace(/([a-z])\1*\1/g, match =>
		match.length + match.slice(-1)
		); 
	}

	tick(){
		const rowLength = this.toArray()[0].length
		this.state = (rowLength + 'b' + '$').repeat(rowLength -1)
			+ rowLength + 'b' + '!';
	}
}