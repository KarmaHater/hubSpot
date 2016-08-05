import fetch from 'isomorphic-fetch';
import * as Constants from '../constants/constants.js';
import data from './../data/data.js';

export function fetchNewJoke() {
    return (dispatch) => {
        let BASE_URL = 'https://api.icndb.com/';
        const url = 'jokes/random';

        window.fetch(BASE_URL + url, {method: 'GET'})
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.status);
                }
                return response;
            }).then((response) => {
            return response.json();
        }).then((data) => {
            const joke = data.value.joke;
            dispatch({
                type: Constants.FETCH_NEW_JOKE,
                joke
            });
        });
    };
}
