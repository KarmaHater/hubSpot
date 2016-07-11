import React from 'react';
import DropDownFilter from './DropDownFilter';
import Classnames from 'classnames';
import './../../styles/DropDownFilter.scss';

export class DropDownFilterContainer extends React.Component {
    static propTypes = {
        filters: React.PropTypes.array.isRequired,
        filterType: React.PropTypes.string.isRequired
    }

    onClick = (filter) => {
        this.props.actions.filterMedia(filter)
    }

    render() {
        const {
            filterType,
            filters,
            onClick
        } = this.props;

        const filtersComponents = filters.map((f, i) => {
           return <DropDownFilter key={i} text={f} onClick={this.onClick.bind(this)}/>;
        })
        return (
            <div className='dropdown'>
                <div>{filterType} v</div>
                <div className='dropdown-content'>
                    {filtersComponents}
                </div>
            </div>
        )
    }
}

export default DropDownFilterContainer
