import ActionTypes from './actiontypes';
import {Actions} from 'react-native-router-flux'

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

const loginAction = function(){
	Actions.main();
	return {
		type: ActionTypes.LOGIN
	}
}

export default {
	increaseAction: increaseAction,
	decreaseAction: decreaseAction,
	loginAction: loginAction
}