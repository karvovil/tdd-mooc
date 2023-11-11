
export class GameState{
  state;

  constructor(state){
     this.state = state;
  }

	toString(){
		return this.state;
	}

	toArray() {
		const withNumbers =  this.state.replace(/\d+./g, match =>
			match.slice(-1).repeat(Number(match.slice(0, -1)))
		)
		return withNumbers.slice(0, -1).split('$')
	}

	arrayToString(arr){
		const noNumbers = arr.join('$') + '!'
		return noNumbers.replace(/([a-z])\1*\1/g, match =>
			match.length + match.slice(-1)
		); 
	}

	neighbours(x,y){
		let neighbours = 0;

		for (let row = y-2; row <= y; row++) {
			for (let column = x-2; column <= x; column++) {
				if(column >= 0 && (row !== y-1 || column !== x-1)){
					if(this.toArray()[row]?.charAt(column) === 'o'){
						neighbours++
					}
				}
			}
		}
		return neighbours;
	}

	tick(){
		const rowLength = this.toArray()[0].length +2
		const emptyRow = 'b'.repeat(rowLength)
		let emptyBoardArray = Array(rowLength).fill(emptyRow) 
		this.state = this.arrayToString(emptyBoardArray)
	}
}