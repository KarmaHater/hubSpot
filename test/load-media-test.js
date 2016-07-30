var expect = require('chai').expect;
import LoadMedia from '../src/reducers/utils/LoadMedia.js';

describe('Reducers utils Load Media', () => {
	let medias = [
        {
            "title": "Raiders of the Lost Ark",
            "year": "1981",
            "poster": "http://ia.media-imdb.com/images/M/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_SY1000_CR0,0,664,1000_AL_.jpg",
            "genre": ["action"],
            "type": "movie"
        },
        {
            "title": "The Other Guys",
            "year": "2010",
            "poster": "http://ia.media-imdb.com/images/M/MV5BMTc0NDQzNTA2Ml5BMl5BanBnXkFtZTcwNzI2OTQzMw@@._V1_.jpg",
            "genre": ["action", "comedy", "crime"],
            "type": "movie"
        }];

    it('only return media\'s genres', () => {
    	let genres = LoadMedia.genres(medias)
    	let result = ["action", "comedy", "crime"];
    	expect(genres).to.eql(result)
    });

    it('only return media\'s years', () => {
    	let years = LoadMedia.years(medias)
    	let result = ["1981", "2010"];
    	expect(years).to.eql(result)
    });
});