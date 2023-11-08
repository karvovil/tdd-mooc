export class GameState{
  state;

  constructor(state){
     this.state = state;
  }

	toString(){
		return this.state;
	}

	noNumbers(){
		return this.state.replace(/[0-9]/g, '')
	}
}