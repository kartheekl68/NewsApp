import React from 'react';
import './headline.component.scss';
import TagComponent from '../../tag-component/tag.component';
import { sharedService } from '../../../services/shared.service';


class HeadLineComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headLines: [],
            queryRoute: 'top-headlines',
            queryString: {
                q: null,
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
        this.getHeadLines();
    }

    getHeadLines = () => {
        sharedService.getHeadLines(this.state.queryRoute, this.state.queryString).then((res) => {
            this.state.headLines.concat(res.data.articles);
            let headLines = []
            res.data.articles.forEach((article) => {
                headLines.push(article);
            });
            this.setState({
                headLines
            })
        }).catch(err => {
            console.log(err);
        })
    }

    navigateToStory = (url) => {
        window.open(url, '_blank');
    }

    render() {
        return (
            <div>
                {this.state.headLines.length > 0 && <div className="top-news">
                    <div className="top-news--left" style={{ backgroundImage: `url(${this.state.headLines[0].urlToImage})` }} onClick={this.navigateToStory.bind(this, this.state.headLines[0].url)}>
                        <div className="left-news-info">
                            <TagComponent type={'headlines'} data={'headlines'} />
                            <h2 className="blog-title">{this.state.headLines[0].title}</h2>
                            <div className="bot-tags">
                                <TagComponent name={'source'} type={'source'} data={this.state.headLines[0].source.name} />
                                <TagComponent name={'author'} type={'author'} data={this.state.headLines[0].author} />
                            </div>
                        </div>
                    </div>
                    <div className="top-news--right scroll-bar">
                        {
                            this.state.headLines.slice(1)
                                .filter((_, i) => i !== 0)
                                .map((obj, i) => {
                                    return (
                                        <div className="right-news-info" onClick={this.navigateToStory.bind(this, obj.url)} key={i}>
                                            <div className="image-cont" style={{ backgroundImage: `url(${obj.urlToImage})` }}>
                                            </div>
                                            <div className="news-cont">
                                                <p className="title">{obj.title}</p>
                                                <div className="tag-holder-ex">
                                                    <TagComponent name={'source'} type={'source'} data={obj.source.name} />
                                                    <TagComponent name={'author'} type={'author'} data={obj.author} />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>}
            </div>
        )
    }
}

export default HeadLineComponent;