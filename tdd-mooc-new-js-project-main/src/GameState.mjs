
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
		if (x-2 >= 0){
			if (this.toArray()[y-2]?.charAt(x-2) === 'o') {
				neighbours++
			} 
			if (this.toArray()[y-1]?.charAt(x-2) === 'o') {
				neighbours++
			} 
			if (this.toArray()[y]?.charAt(x-2) === 'o') {
				neighbours++
			} 
		}
		
		if (x-1 >= 0){
			if (this.toArray()[y-2]?.charAt(x-1) === 'o') {
				neighbours++
			} 
			if (this.toArray()[y]?.charAt(x-1) === 'o') {
				neighbours++
			}
		} 
		if (this.toArray()[y-2]?.charAt(x) === 'o') {
			neighbours++
		} 
		if (this.toArray()[y-1]?.charAt(x) === 'o') {
			neighbours++
		} 
		if (this.toArray()[y]?.charAt(x) === 'o') {
			neighbours++
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