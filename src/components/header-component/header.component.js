import React from 'react';
import { Link } from 'react-router-dom';
import './header.component.scss'

import logo from '../../assets/logo-name.svg';
import menu from '../../assets/open-menu.svg';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            menuDisplay: (window.innerWidth > 800) ? 'flex' : 'none'
        }
        window.onresize = () => {
            this.setState({
                menuDisplay: (window.innerWidth > 800) ? 'flex' : 'none'
            })
        }
    }
    changeMenuState = () => {
        this.setState({
            menuDisplay: (this.state.menuOpen) ? 'none' : 'flex',
            menuOpen: !this.state.menuOpen
        })
    }

    render() {
        return(
            <header className="header">
                <div className="header-content mrgn-auto">
                    <div className="logo">
                        <Link to={'/home'}><img className="logo-img" src={logo} alt="articalX"/></Link>
                        <img className="open-menu" src={menu} alt="menu" onClick={this.changeMenuState}/>
                    </div>
                    <div className="links" style={{display:this.state.menuDisplay}}>
                        <ul className="links-ul">
                            <Link to={"/home"}><li className="links--li">home</li></Link>
                            <Link to={"/categories"}><li className="links--li">categories</li></Link>
                            <Link to={"/"}><li className="links--li">technology</li></Link>
                            <Link to={"/categories?category=movies"}><li className="links--li">movies</li></Link>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }

}

export default HeaderComponent;