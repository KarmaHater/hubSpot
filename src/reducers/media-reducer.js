import _ from 'lodash';
import * as Constants from '../constants/constants.js';
import Filter from './utils/Filter.js';
import LoadMedia from './utils/LoadMedia.js';
import Search from './utils/Search.js';

const initialState = {
    medias: [],
    allMedias: [],
    genres: [],
    years: [],
    filters: [],
    searchFilter: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.LOAD_MEDIAS:
            const medias = action.movies;
            const LoadMedias = LoadMedia()
            const genres = LoadMedias.genres(medias);
            const years = LoadMedias.years(medias);
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
            const filters = Filter.setFilters(state.filters, action.data);
            const filterMedies = Filter.setMedias(filters, state.allMedias);
            return {
                ...state,
                medias: filterMedies,
                filters: filters
            };
            break;
        case Constants.SEARCH_MEDIA:
            let searchMedias = Search.setMedias(action.data, state.allMedias);
            return {
                ...state,
                medias: searchMedias,
                searchFilter: action.data
            };
            break;
        default:
            return state;
    }
};
