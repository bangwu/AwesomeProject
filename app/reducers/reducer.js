import ActionTypes from '../constants/actiontypes';

export default reducer = function(state = {counter: 0}, action) {
    switch(action.type){
		case ActionTypes.INCREASE: 
		  return {counter: state.counter + 1};
		case ActionTypes.DECREASE:
		  return {counter: state.counter - 1};
		default:
		  return state;
	}
}