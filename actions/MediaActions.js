import * as Constants from './../constants/Constants.js';
import data from './../data/data.js'

export function loadMedia() {
    return (dispatch) => {
    	dispatch({
    	    type: Constants.LOAD_MEDIAS,
    	    movies: data.media
    	});
    }	
}

export function filterMedia(filter) {
    return (dispatch) => {
    	dispatch({
    	    type: Constants.FILTER_MEDIA,
            data: filter
    	});
    }	
}
