import React from 'react'
import JokeButton from '../joke-button/joke-button.js';
import Classnames from 'classnames';
import './content-slot.scss';

export default class ContentSlot extends React.Component {

    static propTypes = {
        content: React.PropTypes.string.isRequired,
        showLink: React.PropTypes.bool.isRequired
    }

    renderLink() {
        return <JokeButton actions={this.props.actions}/>;
    }

    render() {
        const {
            content,
            showLink
        } = this.props;

        const containerClass = Classnames({'slot-container-one': !showLink}, {'slot-container-two': showLink});

        return (
            <div className={containerClass}>
                {showLink ? this.renderLink() : ''}
                <div className='slot-content-text'>
                    {content}
                </div>
            </div>
        );
    }
}
