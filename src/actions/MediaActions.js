import * as Constants from './../constants/Constants.js';
import data from './../data/data.js';

export function loadMedia() {
    return {
	                                                                                    type: Constants.LOAD_MEDIAS,
	                                                                                    movies: data.media
    };	
}

export function filterMedia(filter) {
	                                        return {
	                                            type: Constants.FILTER_MEDIA,
    data: filter
	};	
}

export function searchMedia(value) {
	                                        return {
	                                            type: Constants.SEARCH_MEDIA,
    data: value
	};	
}