import React from 'react';
import { Link } from 'react-router-dom';

import './home.component.scss';
import HeadLineComponent from './headline-component/headline.component';
import HomeCategoriesComponent from './home-categories-component/home-categories.component';
import TrendingComponent from './trending-component/trending.component';
import EditorPickComponent from './editor-pick-component/editor-pick.component';


class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className="route-container">
                <div className="mrgn-auto">
                    <HeadLineComponent />
                    <HomeCategoriesComponent />
                    <TrendingComponent />
                    <EditorPickComponent />
                    <div className="findmore">
                        <Link to={'/categories'}><button className="findmore-btn">find more</button></Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomeComponent;