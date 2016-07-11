import React from 'react'
import Classnames from 'classnames';
    
export class MediaFilter extends React.Component {

    static propTypes = {
        filterType: React.PropTypes.string.isRequired
    }

    onClick  = () => {
        const filter = { 
            value: this.refs[this.props.filterType].value,
            checked: this.refs[this.props.filterType].checked
        };

    	this.props.onClick(filter);
    }

    render() {
        
        const {
            filterType
        } = this.props;

        return (
        	<div>
                <lable>{filterType}</lable>
        		<input ref={filterType} type="checkbox" value={filterType} ref={filterType} onClick={this.onClick}/> 
        	</div>
        )
    }
}

export default MediaFilter;
