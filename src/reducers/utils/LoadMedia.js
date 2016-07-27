import _ from 'lodash';
export default class LoadMedia {
	static genres (medias) {
	    const genres = medias.map((m) => m.genre)
	    return _.uniq(_.flatten(genres)).sort();
	}
	
	static years (medias) {
	    const years = medias.map((m) => m.year)
	    return _.uniq(years.sort());
	}
}
