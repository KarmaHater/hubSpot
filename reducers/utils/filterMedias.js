export function updateFilters (filters, filter, allMedias) {
    if (filter.checked === true) {
        return filters.concat([filter.value])
    } else {
       _.remove(filters, function(f) {
          return f === filter.value;
        });
       return filters;
    }
}

export function filterMedia(filters, medias, type) {
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
        return genreResults
    } else {
        return medias;
    }
}

export function setAllVisibleMedia(filterFunction, filters, medias, type) {
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

export function setAllVisibleMedies (filters, medias) {
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