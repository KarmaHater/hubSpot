import { combineReducers } from 'redux';
import medias from './MediaReducer';
import joke from './JokeReducer';

export default combineReducers({
  medias,
  joke
})