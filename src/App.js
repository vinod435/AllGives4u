import React from 'react';
import './App.css';
import Routing from './components/Routing';
import {Provider} from 'react-redux';
import {Store} from './store'
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Provider store={Store}>
      <Routing />
      </Provider>
      </div>
    )
  }
}


