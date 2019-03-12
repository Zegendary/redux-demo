import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const reducer = (state,action)=>{
 if(state === undefined) {
  state = 0
 }
 switch(action.type){
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state -1;
  case 'ADD_2':
    return state + 2;
  case 'ADD_ANY':
    return state + action.payload;
  default:
    return state;
 }
}

const store = Redux.createStore(reducer)

const change = (action) => {
  store.dispatch(action)
}

// const minus = () => {
//   store.dispatch({type: 'DECREMENT'})
// }

const render = ()=>{
  ReactDOM.render(<App value={store.getState()} onChange={change}/>, document.getElementById('root'));
}
render()
store.subscribe(render)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
