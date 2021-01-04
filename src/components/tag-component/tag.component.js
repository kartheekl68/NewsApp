import React from 'react';
import './tag.component.scss';

const colors = {
    headlines: '#ec5252',
    author: '#3bbd99',
    source: '#0F8CFF'
}

var TagComponent = (props) => {
    if (props.data === null) {
        return (
            <div></div>
        )
    }
    return (
    <p className="tag-data" style={{ color: colors[props.type] }}>{props.data}{props.type === 'source' ? ',' : null}</p>
    )
}

export default TagComponent;