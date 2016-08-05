import * as JokeConstants from '../constants/constants.js';

const initialState = {
    joke: 'Click Button to see a new joke'
};


export default (state = initialState, action) => {
    switch (action.type) {
        case JokeConstants.FETCH_NEW_JOKE:
            return {
                ...state,
                joke: action.joke
            };
        default:
            return state;
    }
};

