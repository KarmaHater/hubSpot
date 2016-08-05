import React from 'react';
import Movie from './media/Media.js';
import './media/Media.scss';

function renderMovies (medias) {
    return medias.map(function (media, i) {
        return <Movie key={i} media={media}/>;
    });
}

export default class MediasContainer extends React.Component {

    static propTypes = {
        medias: React.PropTypes.array.isRequired
    }


    componentWillMount() {
        this.props.actions.loadMedia();
    }

    handleFilter() {

    }

    render() {
        var medias = renderMovies(this.props.medias);
        return (
            <div>
                <div className='medias-container'>
                    {medias}
                </div>
            </div>
        );
    }
}
