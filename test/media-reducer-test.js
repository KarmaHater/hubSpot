import { expect } from 'chai';
import reducer from '../src/reducers/MediaReducer';
import * as Constants from '../src/constants/Constants.js';

describe('Media Reducer', () => {
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
			            "genre": ["comedy"],
			            "type": "book"
			        }];

		let state = {
			allMedias: medias,
			filters: []
		};

	it('should set medias, years, genres and allMedia on LOAD_MEDIAS', () => {
		let action = {
			type: Constants.LOAD_MEDIAS,
			data: medias
		};
		let newState = reducer(state, action);

		expect(newState.medias).to.eql(medias);
		expect(newState.allMedias).to.eql(medias);
		expect(newState.years).to.eql(["1981", "2010"]);
		expect(newState.genres).to.eql(["action", "comedy"]);
	})


	it('should set filter and filter medias by correctly FILTER_MEDIA', () => {
		let action = {
			type: Constants.FILTER_MEDIA,
			data: { value: "book", checked: true }
		};
		let newState = reducer(state, action);

		expect(newState.filters).to.eql([action.data.value]);
		expect(newState.medias).to.eql([medias[1]]);
	})

	it('should set correct medias by search SEARCH_MEDIA', () => {
		let action = {
			type: Constants.SEARCH_MEDIA,
			data: 'other'
		}
		let newState = reducer(state, action);

		expect(newState.searchFilter).to.eql(action.data);
		expect(newState.medias).to.eql([medias[1]])
	})
});
