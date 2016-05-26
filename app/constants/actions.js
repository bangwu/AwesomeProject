import ActionTypes from './actiontypes';
const increaseAction = function(){
	return {
		type: ActionTypes.INCREASE
	}
}

const decreaseAction = function(){
	return {
		type: ActionTypes.DECREASE
	}
}

export default {
	increaseAction: increaseAction,
	decreaseAction: decreaseAction
}