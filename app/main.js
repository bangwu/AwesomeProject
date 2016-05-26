import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store from './store/createStore';

export default class Main extends Component{
  render () {
  	return (
  		<Provider store={ store }>
    	  <AppContainer/>
        </Provider>
    );  
  }
}