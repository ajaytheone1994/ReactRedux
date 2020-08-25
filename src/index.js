import React from 'react';  
import ReactDOM from 'react-dom';  
import './index.css';  
import App from './App';  
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk  from 'redux-thunk'
import { Provider } from 'react-redux';
import nameChangeReducer from './reducers/nameChangeReducer';
import wishReducer from './reducers/wishReducer';
const MasterReducer=combineReducers({
    name:nameChangeReducer,
    wish:wishReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(MasterReducer, {name:'Ajeet', wish:['eat', 'sleep']}, composeEnhancers(applyMiddleware(thunk))); 
ReactDOM.render(<Provider store={store}>   <App/></Provider>, document.getElementById('root'));  