
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

	isAlive(x,y){
		if (this.toArray()[y-1]?.charAt(x-1)){
			return this.toArray()[y-1]?.charAt(x-1) === 'o' ? true : false;
		}else{
			return false;
		}

	}

	nextCell(x,y){
		if (this.isAlive(x,y)){
			if (this.neighbours(x,y) === 2 || this.neighbours(x,y) === 3){
				return 'o';
			}else{
				return 'b'
			}
		}else{
			return this.neighbours(x, y) === 3 ? 'o' : 'b';
		}
	}

	tick(){
		const rowLength = this.toArray()[0].length +2
		let newState = [];
		for (let row = 0; row < rowLength; row++) {
			let newRow = ''
			for (let column = 0; column < rowLength; column++) {
					newRow = newRow + this.nextCell(column,row);
			}
			newState.push(newRow);
		}
		this.state = this.arrayToString(newState);
	}
}