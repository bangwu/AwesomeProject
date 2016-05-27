import ActionTypes from '../constants/actiontypes';

export default reducer = function(state = {counter: 0}, action) {
	console.log('action', action);
    switch(action.type){
		case ActionTypes.INCREASE: 
		  return {counter: state.counter + 1};
		case ActionTypes.DECREASE:
		  return {counter: state.counter - 1};
	    case ActionTypes.LOGIN:
	      return {token: '123', counter: state.counter}
		default:
		  return state;
	}
}