import React, { Component, PropTypes } from 'react'
import Classnames from 'classnames';
import './../../styles/DropDownFilter.scss';

export default class DropDownFilter extends Component {

	static PropTypes = {
		text: React.PropTypes.string.isRequired
	}

    unClear() { 
        var w = document.getElementsByTagName('input'); 
        for (var i = 0; i < w.length; i++) { 
            if (w[i].type=='text') { 
                w[i].value= ''; 
            }
        }
    } 

    onClick = () => {
        this.unClear();
        const filter = {
            value: this.refs[this.props.text].value,
            checked: this.refs[this.props.text].checked
        };

        this.props.onClick(filter);
    }

    render() {
        const {
    		text,
            onClick
    	} = this.props;

        return (
            <div>
                <label onClick={this.onClick}>
                    {text}
                    <input type='checkbox' value={text} ref={text} />
                </label>
            </div>
        );
    }
}