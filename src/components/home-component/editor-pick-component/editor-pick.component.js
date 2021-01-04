import React from 'react';
import './editor-pick.component.scss';

import { sharedService } from '../../../services/shared.service';
import GigComponent from '../../gig-component/gig.component';

class EditorPickComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorsPick: [],
            queryRoute: 'everything',
            queryString: {
                q: 'popular',
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
        this.getEditorsPick();
    }

    navigateToStory = (url) => {
        window.open(url, '_blank');
    }

    getEditorsPick = () => {
        sharedService.getHeadLines(this.state.queryRoute, this.state.queryString).then((res) => {
            this.state.editorsPick.concat(res.data.articles);
            let editorsPick = [];
            res.data.articles.forEach(article => {
                editorsPick.push(article);
            })
            this.setState({
                editorsPick
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <section className="editor-pick">
                <h2 className="section-title">editors pick</h2>
                <div className="art-grid">
                    {
                        this.state.editorsPick
                            .filter((_, i) => {
                                return i < 12
                            })
                            .map((obj, i) => {
                                return (
                                    <div className="art-grid--element" key={i}>
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

export default EditorPickComponent;