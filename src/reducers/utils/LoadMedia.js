import _ from 'lodash';

const LoadMedia = () => {
	return {
		genres: (medias) => {
		    const genres = medias.map((m) => m.genre);
		    return _.uniq(_.flatten(genres)).sort();

	    },
        years: (medias) => {
            const years = medias.map((m) => m.year);
            return _.uniq(years.sort());
        }
	}
}

export default LoadMedia;