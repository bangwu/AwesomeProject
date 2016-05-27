import { connect } from 'react-redux';
import Login from '../components/login';
import Actions from '../constants/actions';

const mapStateToProps = function(state, ownProps){
  return {};
}

const mapDispatchToProps = function(dispatch, ownProps){
  return {
  	handleLogin: ()=>{
  		dispatch(Actions.loginAction());
  	}
  }
}


const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;