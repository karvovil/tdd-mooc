
export class GameState{
  state;

  constructor(state){
     this.state = state;
  }

	toString(){
		return this.state;
	}

	noNumbers(){
		return this.state.replace(/\d+/g, match => 'b'.repeat(match-1)); 
	}
}