import React from 'react';
import '../../styles/joke-button.scss';

export default class JokeButton extends React.Component {

    static propTypes = {
        handleClick: React.PropTypes.func
    }

    handleClick() {
        this.props.actions.fetchNewJoke();
    }

    render() {
        return (
            <div className='api-link'>
                <a onClick={()=> this.handleClick()}>Tell Me More</a>
            </div>
        );
    }
}
