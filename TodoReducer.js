import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default (state = defaultState, action) =>{
		// return state
		switch (action.type){
			case 'ADDITEM':
				return state.concat(action.item);
			case 'REMOVEITEM':
				return state.delete(action.id);
			case 'EDITITEM':
				return state.set(action.id, action.text);
			case 'COMPLETEITEM':
				console.log(action.completed)
				return state.update(action.id, action.completed)
			default:
				return state
		}

}
