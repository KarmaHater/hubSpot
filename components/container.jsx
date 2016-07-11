import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as MediaActions from './../actions/MediaActions.js';
import * as JokeActions from './../actions/JokeActions.js';

import Header from './Header.js';
import MediaContainer from './MediaContainer.js';
import ContentSlot from './ContentSlot.js';
import DropDownFilterContainer from './Filters/DropDownFilterContainer.js';
import MediaFilterContainer from './Filters/MediaFilterConatiner.js';

class Container extends Component {
    render() {
        return (
            <div>
                <Header headline={"Exercise - Testimonial Block"}/>
                <ContentSlot content={"content"}
                             showLink={false}/>

                <Header headline={"Exercise - CTA Quote"}/>
                <ContentSlot content={this.props.joke}
                             actions={this.props.jokeActions}  
                             showLink={true}/>
                <DropDownFilterContainer filters={this.props.geners}
                                         filterType={'geners'}
                                         actions={this.props.mediaActions} />

                <DropDownFilterContainer filters={this.props.years}
                                         filterType={'years'}
                                         actions={this.props.mediaActions} />                         

                <MediaFilterContainer filterType={'book'}
                                      actions={this.props.mediaActions}/>

                <MediaFilterContainer filterType={'movie'}
                                      actions={this.props.mediaActions}/>

                <MediaContainer medias={this.props.medias}
                                actions={this.props.mediaActions}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        medias: state.medias.medias,
        joke: state.joke.joke,
        geners: state.medias.geners,
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