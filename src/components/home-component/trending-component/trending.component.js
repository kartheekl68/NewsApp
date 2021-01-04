import React from 'react';
import './trending.component.scss';

import { sharedService } from '../../../services/shared.service';
import GigComponent from '../../gig-component/gig.component';

class TrendingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trendingData: [],
            queryRoute: 'everything',
            queryString: {
                q: 'trending',
                category: null,
                from: null,
                to: null,
                domain: null,
                source: null,
                page: 1,
                language: 'en',
                country: 'us'
            }
        }
    }

    componentDidMount = () => {
        this.getTrendingData();
    }

    navigateToStory = (url) => {
        window.open(url, '_blank');
    }

    getTrendingData = () => {
        sharedService.getHeadLines(this.state.queryRoute, this.state.queryString).then((res) => {
            let trendingData = [];
            res.data.articles.forEach(article => {
                trendingData.push(article);
            })
            this.setState({
                trendingData
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <section className="trending">
                <h2 className="section-title">trending</h2>
                <div className="trending-cont scroll-bar--h">
                    {
                        this.state.trendingData.map((obj, i) => {
                            return (
                                <div className="gig-holder"  key={i}>
                                    <GigComponent obj={obj}/>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        )
    }
}

export default TrendingComponent;