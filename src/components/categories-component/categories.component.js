import React from 'react';
import './categories.component.scss';
import ReactPaginate from 'react-paginate';
import queryString from 'query-string';
// import assetes
import search_icon from '../../assets/search.svg';
// import components
import GigComponent from '../gig-component/gig.component';
// import services
import { sharedService } from '../../services/shared.service';

class CategoriesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cat_res: [],
            filter_categories: {
                headlines: true,
                politics: false,
                covid19: false,
                technology: false,
                trending: false,
                music: false,
                movies: false,
                special: false,
                culture: false,
                lifestyle: false
            },
            filter_sources: {
                "cnn": {
                    name: 'cnn',
                    checked: true
                },
                "bbc news": {
                    name: 'bbc-news',
                    checked: false
                },
                "espn": {
                    name: 'espn',
                    checked: false
                },
                "msnbc": {
                    name: 'msnbc',
                    checked: false
                },
                "mtv news": {
                    name: 'mtv-news',
                    checked: false
                },
                "national geographic": {
                    name: 'national-geographic',
                    checked: false
                },
                "politico": {
                    name: 'politico',
                    checked: false
                },
                "techcrunch": {
                    name: 'techcrunch',
                    checked: false
                },
                "the hindu": {
                    name: 'the-hindu',
                    checked: false
                },
            },
            selected_cat: 'headlines',
            selected_source: 'cnn',
            queryRoute: 'everything',
            queryString: {
                q: 'trending',
                category: null,
                from: null,
                to: null,
                domain: null,
                sources: null,
                page: 1,
                language: 'en',
                country: 'us'
            },
            pageCount: 0,
            selectedPage: 0
        }
    }


    componentDidMount = async() => {

        await this.checkQueryString();
        this.updateQueryString();
        this.getSearchCategories();

    }

    checkQueryString = () => {
        let params = queryString.parse(this.props.location.search);

        if (params.category) {
            this.updateFilterCategories(params.category);
        }
    }

    updateQueryString = () => {

        let queryStringCopy = this.state.queryString;
        queryStringCopy['q'] = this.state.selected_cat;
        queryStringCopy['sources'] = this.state.selected_source;

        this.setState({
            queryString: queryStringCopy
        });

    }

    updateFilterCategories = (value, callback = null) => {
        let prevobjCat = this.state.filter_categories;
        Object.keys(prevobjCat).map(key => {
            return prevobjCat[key] = (key === value) ? true : false;
        });

        this.setState({
            filter_categories: prevobjCat,
            selected_cat: value,
            queryString: {
                ...this.state.queryString,
                page: 1
            },
            selectedPage: 0
        }, callback);

    }

    getSearchCategories = () => {
        sharedService.getHeadLines(this.state.queryRoute, this.state.queryString).then(res => {
            let result = [];
            res.data.articles.forEach(article => {
                result.push(article);
            })
            this.setState({
                cat_res: result,
                pageCount: Math.ceil(res.data.totalResults / result.length)
            })
        }).catch(err => {
            console.log(err);
        });
    }

    onFilterChange = (value, cat_type) => {
        switch (cat_type) {

            case 'filter_categories':

                this.updateFilterCategories(value, this.handleUpdate);

                break;
            case 'filter_sources':

                let prevobjSource = this.state.filter_sources
                Object.keys(prevobjSource).map((key) => {
                    return prevobjSource[key].checked = (prevobjSource[key].name === value) ? true : false
                });

                this.setState({
                    filter_sources: prevobjSource,
                    selected_source: value,
                    queryString: {
                        ...this.state.queryString,
                        page: 1
                    },
                    selectedPage: 0
                }, this.handleUpdate);

                break;

            default:
                break;
        }


    }

    handleUpdate = () => {
        this.updateQueryString();
        this.getSearchCategories();
    }

    pageChange = (e) => {
        let page = e.selected+1;
        this.setState({
            selectedPage: page-1,
            queryString: {
                ...this.state.queryString,
                page: page
            }
        }, this.handleUpdate);
    }




    render() {
        return (
            <div className="route-container">
                <div className="cat-content mrgn-auto">
                    <div className="cat-search">
                        <div className="cat-search-input">
                            <input className="search-text" type="text" placeholder="Search a categorie / Artical / Trend" />
                            <button className="search-btn"><img src={search_icon} alt="search" /></button>
                        </div>
                    </div>
                    <div className="cat-items">
                        <div className="filter">
                            <div className="filter-sec">
                                <h3>category</h3>
                                {
                                    Object.keys(this.state.filter_categories).map((key, i) => {
                                        return (
                                            <label className="filter-label" key={i}>
                                                <input type="radio" value={key} checked={this.state.filter_categories[key]} onChange={e => this.onFilterChange(e.target.value, 'filter_categories')} />
                                                {key}
                                            </label>
                                        )
                                    })
                                }
                            </div>
                            <div className="filter-sec">
                                <h3>source</h3>
                                {
                                    Object.keys(this.state.filter_sources).map((key, i) => {
                                        return (
                                            <label className="filter-label" key={i}>
                                                <input type="radio" value={this.state.filter_sources[key].name} checked={this.state.filter_sources[key].checked} onChange={e => this.onFilterChange(e.target.value, 'filter_sources')} />
                                                {key}
                                            </label>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="cat-gig-container">
                            <div className="cat-gigs">
                                {
                                    this.state.cat_res.map((obj, i) => {
                                        return (<div className="art-grid--element" key={i}>
                                            <GigComponent obj={obj} />
                                        </div>)
                                    })
                                }
                            </div>
                            <div className="cat-pagination">
                                <ReactPaginate
                                    pageCount={this.state.pageCount}
                                    initialPage={0}
                                    forcePage={this.state.selectedPage}
                                    containerClassName="pagination-container"
                                    pageClassName="pageClassName"
                                    previousClassName="pageClassName"
                                    nextClassName="pageClassName"
                                    breakClassName="pageClassName"
                                    activeClassName="activeClass"
                                    activeLinkClassName="activeLinkClassName"
                                    pageLinkClassName="pageLinkClass"
                                    previousLinkClassName="pageLinkClass"
                                    nextLinkClassName="pageLinkClass"
                                    onPageChange={e => this.pageChange(e)}
                                    disableInitialCallback={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CategoriesComponent;