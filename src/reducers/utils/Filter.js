export default class Filter {
    static setFilters (filters, filter, allMedias) {
        if (filter.checked === true) {
            return filters.concat([filter.value]);
        } else {
           _.remove(filters, (f) => f === filter.value);
           return filters;
        }
    }

    static setMedias (filters, medias) {
        var newMedias = medias;

        if (filters.length === 0) {
            return medias;
        }

        //filter by type
        const mediaFilters = filters.filter((f) => {
            return f === 'book' || f === 'movie';
        })

        var newMedias = updateMedia(filterTypeYear, mediaFilters, newMedias, 'type');

        //filter by year
        const yearFilters = filters.filter((f) => /^\d+$/.test(f));

        var newMedias = updateMedia(filterTypeYear, yearFilters, newMedias, 'year');

        // //filter by genre
        const genreFilters = filters.filter((f) => !/^\d+$/.test(f) && f !== 'book' && f !== 'movie');

        const genres = filterGenre(genreFilters, newMedias);
        newMedias = [];
        newMedias.push(genres);

        return _.uniq(newMedias[0]);
    }
}

//better name for this function
export function filterTypeYear(filters, medias, type) {
    const mediaResults = [];
    for (var i = 0; i < medias.length; i++) {
        for (var f = 0; f < filters.length; f++) {
            if (filters[f] === medias[i][type]) {
                mediaResults.push(medias[i])
            }
        }
    }
    return mediaResults;
}

export function filterGenre(filters, medias) {
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
        return genreResults;
    } else {
        return medias;
    }
}

export function updateMedia(filterFunction, filters, medias, type) {
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
