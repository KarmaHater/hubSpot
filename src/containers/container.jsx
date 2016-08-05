import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as MediaActions from '../actions/MediaActions.js';
import * as JokeActions from '../actions/JokeActions.js';

import Header from '../components/header/Header.js';
import MediaContainer from '../components/MediaContainer.js';
import ContentSlot from '../components/content-slot/ContentSlot.js';
import DropDownFilterContainer from '../components/Filters/DropDownFilterContainer.js';
import MediaFilterContainer from '../components/Filters/MediaFilterConatiner.js';
import SearchFilter from '../components/Filters/SearchFilter.js';


class Container extends Component {
    render() {
        const {
          genres,
          medias,
          mediaActions,
          joke,
          jokeActions,
          years
        } = this.props;

        return (
            <div>
    
                <Header headline={"Exercise - Testimonial Block"}/>
                <ContentSlot content={"content"}
                             showLink={false}/>

                <Header headline={"Exercise - CTA Quote"}/>
                <ContentSlot content={joke}
                             actions={jokeActions}  
                             showLink={true}/>

                <SearchFilter actions={mediaActions}/>

                <DropDownFilterContainer filters={genres}
                                         filterType={'genres'}
                                         actions={mediaActions} />

                <DropDownFilterContainer filters={years}
                                         filterType={'years'}
                                         actions={mediaActions} />                         

                <MediaFilterContainer filterType={'book'}
                                      actions={mediaActions}/>

                <MediaFilterContainer filterType={'movie'}
                                      actions={mediaActions}/>

                <MediaContainer medias={medias}
                                actions={mediaActions}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        medias: state.medias.medias,
        joke: state.joke.joke,
        genres: state.medias.genres,
        years: state.medias.years
    };
}
function mapDispatchToProps(dispatch) {
    return {
        mediaActions: bindActionCreators(MediaActions, dispatch),
        jokeActions: bindActionCreators(JokeActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);