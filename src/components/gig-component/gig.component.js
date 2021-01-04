import React from 'react';

import './gig.component.scss';
import TagComponent from '../tag-component/tag.component';

var GigComponent = (props) => {
    return (
        <article className="trend-art">
            <div className="image-hold" style={{ backgroundImage: `url(${props.obj.urlToImage})` }}>

            </div>
            <div className="cont-hold">
                <p className="title" onClick={navigateToStory.bind(this, props.obj.url)}>{props.obj.title}</p>
                <p className="description">{props.obj.description}</p>
                <div className="tag-holder">
                    <TagComponent name={'source'} type={'source'} data={props.obj.source.name} />
                    <TagComponent name={'author'} type={'author'} data={props.obj.author} />
                </div>
            </div>
        </article>
    )
}

var navigateToStory = (url) => {
    window.open(url, '_blank');
}

export default GigComponent;