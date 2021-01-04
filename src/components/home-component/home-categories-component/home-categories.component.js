import React from 'react';
import { withRouter } from 'react-router-dom';
import './home-categories.component.scss';

class HomeCategoriesComponent extends React.Component {

    navigateTo = (subCategory) => {

        this.props.history.push(`/categories?category=${subCategory}`)
    
    }

    render = () => {
        return(
            <section className="popular-cat">
            <h2 className="section-title">popular categories</h2>
            <div className="cat-holder">
                <div className="categorie" onClick={this.navigateTo.bind(this, 'culture')}>
                    <div className="cat-image cat--1"></div>
                    <p>culture</p>
                </div>
                <div className="categorie"  onClick={this.navigateTo.bind(this, 'lifestyle')}>
                    <div className="cat-image cat--2"></div>
                    <p>lifestyle</p>
                </div>
                <div className="categorie"  onClick={this.navigateTo.bind(this, 'technology')}>
                    <div className="cat-image cat--3"></div>
                    <p>technology</p>
                </div>
                <div className="categorie"  onClick={this.navigateTo.bind(this, 'headlines')}>
                    <div className="cat-image cat--4"></div>
                    <p>news</p>
                </div>
                <div className="categorie"  onClick={this.navigateTo.bind(this, 'movies')}>
                    <div className="cat-image cat--5"></div>
                    <p>movies</p>
                </div>
                <div className="categorie"  onClick={this.navigateTo.bind(this, 'music')}>
                    <div className="cat-image cat--6"></div>
                    <p>music</p>
                </div>
            </div>
        </section>
        )
    }

}



export default withRouter(HomeCategoriesComponent);