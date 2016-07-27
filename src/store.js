import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index';

module.exports = applyMiddleware(thunkMiddleware 
)(createStore)(rootReducer);