import React from 'react'

import './../styles/Media.scss';

export class Media extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
        year: React.PropTypes.string,
        poster: React.PropTypes.string,
        genre: React.PropTypes.string,
        type: React.PropTypes.string
    }

    rendersGenres(genre) {
        return genre.map(function (g, i) {
            const comma = genre.length - 1 === i ? '' : ','
            return <span key={i} className="media-genre">{`${g}${comma} `}</span>
        })
    }

    render() {
        const {
            title,
            year,
            poster,
            genre,
            type
        } = this.props.media

        return (
            <div className='media-container '>
                <img className='media-image' src={poster} />
                <div className='media-container-description'>
                <div className='media-title'>
                    {title}
                    <span className='media-year'> ({year})</span>
                    </div>
                    genre: {this.rendersGenres(genre)}
                </div>
            </div>
        )
    }
}

export default Media
