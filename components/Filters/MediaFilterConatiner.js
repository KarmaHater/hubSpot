import React from 'react'
import MediaFilter from './MediaFilter'
import Classnames from 'classnames';

export default class MediaContainer extends React.Component {

    static propTypes = {
        filterType: React.PropTypes.string.isRequired
    }

    unClear(){ 
        var w = document.getElementsByTagName('input'); 
        for(var i = 0; i < w.length; i++){ 
            if(w[i].type=='text'){ 
                w[i].value= ''; 
            }
        }
    } 

    onClick = (filter) => {
        this.unClear();
        this.props.actions.filterMedia(filter)
    }

    render() {
        return (
            <div>
                <MediaFilter filterType={this.props.filterType} onClick={this.onClick}/>
            </div>
        )
    }
}
