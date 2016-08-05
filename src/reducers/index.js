import {combineReducers} from 'redux';
import medias from './media-reducer';
import joke from './joke-reducer';

export default combineReducers({
    medias,
    joke
});