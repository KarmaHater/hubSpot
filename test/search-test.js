var expect = require('chai').expect;
import Search from '../src/reducers/utils/Search.js';

describe('Reducers utils Search', () => {
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

    it('returns correct search results', () => {
    	let searchString = "other"
        let result = Search.setMedias(searchString, medias);
    	expect(result.length).to.equal(1)
    });
});