import * as Constants from './../constants/Constants.js';
const _ = require('lodash');

const initialState = {
    medias: [],
    allMedias: [],
    geners: [],
    years: [],
    filters: []
};

function fetchMovieGenres (medias) {
    const geners = medias.map(function (m) {
            return m.genre;
    })

    const flattenGerners =  _.flatten(geners);

    return _.uniq(flattenGerners.sort());
}

function fetchMovieYears (medias) {
    const years = medias.map(function (m) {
        return m.year;
    })
    return _.uniq(years.sort());
}

function updateFilters (filters, filter, allMedias) {
    if (filter.checked === true) {
        return filters.concat([filter.value])
    } else {
       _.remove(filters, function(f) {
          return f === filter.value;
        });
       return filters;
    }
}

function filterMedia(filters, medias, type) {
    const mediaResults = [];
    for (var i = 0; i < medias.length; i++) {
        for (var f = 0; f < filters.length; f++) {
            if (filters[f] === medias[i][type]) {
                mediaResults.push(medias[i])
            }
        }
    }
    return mediaResults
}

function filterGenre(filters, medias) {
    const genreResults = [];
    if (filters.length > 0) {
 
        for (var i = 0; i < medias.length; i++) {
            for (var f = 0; f < filters.length; f++) {
                let media = medias[i];
                let mediaGenres = media.genre;
                let filter = filters[f];
                for (var g = 0; g < mediaGenres.length; g++) {
                    if (filter === mediaGenres[g]) {
                        genreResults.push(media)
                    }
                }
            }
        }
        return genreResults
    } else {
        return medias;
    }
}

function setAllVisibleMedia(filterFunction, filters, medias, type) {
    var results = [];
    if (filters.length > 0) {
        if (type) {
            let newMedies = filterFunction(filters, medias, type)
            results.push(newMedies);
        }
        return results[0];
    } else {
        return medias;
    }
}

function setAllVisibleMedies (filters, medias) {
    var newMedias = medias;

    if (filters.length === 0) {
        return medias;
    }

    //filter by media
    const mediaFilters = filters.filter(function(f) {
        return f === 'book' || f === 'movie';
    }.bind(this))

    var newMedias = setAllVisibleMedia(filterMedia, mediaFilters, newMedias, 'type');

    //filter by year
    const yearFilters = filters.filter(function(f) {
        return /^\d+$/.test(f)
    })

    var newMedias = setAllVisibleMedia(filterMedia, yearFilters, newMedias, 'year');

    // //filter by genre
    const genreFilters = filters.filter(function(f) {
        return !/^\d+$/.test(f) && f !== 'book' && f !== 'movie';
    })

    const genres = filterGenre(genreFilters, newMedias)
    newMedias = [];
    newMedias.push(genres);

    return _.uniq(newMedias[0]);
}

export default (state = initialState, action) => {
    switch(action.type) {
        case Constants.LOAD_MEDIAS:
            const medias = action.movies;
            const geners = fetchMovieGenres(medias);
            const years = fetchMovieYears(medias);
            const allMedias = medias;
            return {
                ...state,
                medias,
                allMedias,
                geners,
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
        default:
        return state;
    }
}

