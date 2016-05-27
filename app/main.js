import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import LoginContainer from './containers/LoginContainer';
import store from './store/createStore';
import { Scene, Router } from 'react-native-router-flux'

class Main extends Component{
  render () {
  	return (
  		<Provider store={ store }>
    	  <AppContainer/>
        </Provider>
    );  
  }
}

class Login extends Component{
  render () {
  	return (
  		<Provider store={ store }>
    	  <LoginContainer/>
        </Provider>
    );  
  }
}

export default class MainApp extends Component{
	render() {
		return (
           <Router>
           	<Scene key='root'>
           		<Scene key='login' component={ Login } title='title'/>
           		<Scene key='main' component={ Main } title='title'/>
           	</Scene>
           </Router>
		);
	}
}