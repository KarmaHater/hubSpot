import * as Constants from './../constants/Constants.js';
import { updateFilters, filterMedia, filterGenre, setAllVisibleMedia, setAllVisibleMedies } from './utils/filterMedias.js';
import { fetchMovieGenres, fetchMovieYears } from './utils/loadMedias.js';
import { SearchFilter } from './utils/searchMedias.js';
import _ from 'lodash';

const initialState = {
    medias: [],
    allMedias: [],
    genres: [],
    years: [],
    filters: [],
    searchFilter: ''
};

export default (state = initialState, action) => {
    switch(action.type) {
        case Constants.LOAD_MEDIAS:
            const medias = action.movies;
            const genres = fetchMovieGenres(medias);
            const years = fetchMovieYears(medias);
            const allMedias = medias;
            return {
                ...state,
                medias,
                allMedias,
                genres,
                years
            };
            break;
        case Constants.FILTER_MEDIA:
            const filters = updateFilters(state.filters, action.data);
            const filterMedies = setAllVisibleMedies(filters, state.allMedias);
            return {
                ...state,
                medias: filterMedies,
                filters: filters
            };
            break;
        case Constants.SEARCH_MEDIA:
            let searchMedias = setSearchMedias(action.data, allMedias)

            return {
                ...state,
                medias: searchMedias,
                searchFilter: action.data
            };
            break;

        default:
        return state;
    }
}

