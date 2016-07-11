import React from 'react'

import './../styles/Header.scss';

export class Header extends React.Component {

	static propTypes = {
	    headline: React.PropTypes.string.isRequired
	}

	render() {
		return (
			<div className='headline'>
				<h1>{this.props.headline}</h1>
			</div>
		)
	}
}

export default Header
