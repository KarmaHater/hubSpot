export function fetchMovieGenres (medias) {
    const genres = medias.map(function (m) {
            return m.genre;
    })

    const flattenGerners =  _.flatten(genres);

    return _.uniq(flattenGerners.sort());
}

export function fetchMovieYears (medias) {
    const years = medias.map(function (m) {
        return m.year;
    })
    return _.uniq(years.sort());
}