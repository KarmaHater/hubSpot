import React from 'react'
import MediaFilter from './MediaFilter'
import Classnames from 'classnames';

export default class MediaContainer extends React.Component {

    static propTypes = {
        filterType: React.PropTypes.string.isRequired
    }

    onClick = (filter) => {
        this.props.actions.filterMedia(filter)
    }

    render() {
        return (
            <div>
                <MediaFilter filterType={this.props.filterType} onClick={this.onClick}/>
            </div>
        )
    }
}
