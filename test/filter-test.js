import { expect } from 'chai';
import { filterTypeYear, filterGenre } from '../src/reducers/utils/Filter.js';

describe('Reducers utils Filter', () => {
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
            "type": "book"
        }];


    // it('filterTypeYear returns correct type or year ', () => {
    //     let filters = ["movie"];
    //     let type = "movie";
    //     let result = filterTypeYear(filters, medias, type);
    //     console.log(result, 'result')
    //     expect(result.length).to.eql(1)
    // });

    it('filterTypeYear returns correct gernres ', () => {
        let gernres = ["comedy"];
        let result = filterGenre(gernres, medias);
        expect(result.length).to.eql(1)
    });
});

// missing two methods 