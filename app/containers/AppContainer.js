import { connect } from 'react-redux';
import App from '../components/app';
import Actions from '../constants/actions';

const mapStateToProps = function(state, ownProps){
  return { counter: state.counter };
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
  	handleIncrease: ()=>{
      dispatch(Actions.increaseAction());
  	},
  	handleDecrease: ()=>{
      dispatch(Actions.decreaseAction());
  	}
  }
}


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;