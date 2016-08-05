import React from 'react';

import '../../styles/header.scss';

export default class Header extends React.Component {

	                                        static propTypes = {
	                                            headline: React.PropTypes.string.isRequired
	}

	                                        render() {
		                                        return (
			<div className='headline'>
				<h1>{this.props.headline}</h1>
			</div>
		);
	}
}
