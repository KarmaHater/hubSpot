import React from 'react';
import Classnames from 'classnames';
import '../../styles/search-filter.scss';

export default class SearchFilter extends React.Component {

    uncheckAll() {
        var w = document.getElementsByTagName('input');
        for (var i = 0; i < w.length; i++) {
            if (w[i].type == 'checkbox') {
                w[i].checked = false;
            }
        }
    }

    onChange = () => {
        let value = this.refs.text.value;
        this.props.actions.searchMedia(value);
        this.uncheckAll();
    }

    render() {

        return (
            <div className='search-filter'>
                <label>
                    Search:
                    <input onChange={this.onChange} type='text' ref='text'/>
                </label>
            </div>
        );
    }
}