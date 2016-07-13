import React from 'react'
import Classnames from 'classnames';
import './../../styles/DropDownFilter.scss';

export default class DropDownFilter extends React.Component {

	static propTypes = {
		text: React.PropTypes.string.isRequired
	}

    onClick = () => {
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
        )
    }
}