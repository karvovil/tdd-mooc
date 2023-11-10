
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

	arrayToString(arr){
		const nn = arr.join('$') + '!'
		return nn.replace(/([a-z])\1*\1/g, match =>
			match.length + match.slice(-1)
		); 
	}

	tick(){
		const rowLength = this.toArray()[0].length
		const emptyRow = 'b'.repeat(rowLength)
		let emptyBoardArray = Array(rowLength).fill(emptyRow) 
		this.state = this.arrayToString(emptyBoardArray)
	}
}