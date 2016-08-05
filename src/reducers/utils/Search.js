export default class Search {
	                                        static setMedias(value, medias) {
		                                        return medias.filter((m)=> { 
			                                        return m.title.toLowerCase().includes(value.toLowerCase());
		});
	}
}
