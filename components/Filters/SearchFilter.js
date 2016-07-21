import React from 'react'
import Classnames from 'classnames';
import './../../styles/SearchFilter.scss';

export default class SearchFilter extends React.Component {

    onChange = () => {
        let value = this.refs.text.value;
        this.props.actions.searchMedia(value);
    }

    render() {

        return (
            <div className='search-filter'>
                <label>
                    Search: 
                    <input onChange={this.onChange} type='text' ref='text' />
                </label>
            </div>
        )
    }
}