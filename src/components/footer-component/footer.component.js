import React from 'react';
import { Link } from 'react-router-dom';
import './footer.component.scss';
import github from '../../assets/github.svg';
import instgram from '../../assets/instgram.svg';
import twitter from '../../assets/twitter.svg';

var FooterComponent = (props) => {
    return (
        <footer className="footer-container">
            <div className="footer-cont mrgn-auto">
                <div className="footer-content">
                    <div className="footer-aboutme">
                        <h3>About Me</h3>
                        <p>I am Kartheek G, Web developer with 3 years of experience. Through this site I want to show case my skills and to makes lifes easier in finding articals across the web. The source of the data that I am using is from newapi.org. Follow me on Linkedin if you like my work.</p>
                    </div>
                    <div className="footer-categories">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to={'/categories'}>Categories</Link></li>
                            <li><Link to={'/categories?category=trending'}>Trending</Link></li>
                            <li><Link to={'/categories?category=special'}>Special</Link></li>
                            <li><Link to={'/categories?category=covid19'}>COVID-19</Link></li>
                            <li><Link to={'/home'}>Home</Link></li> 
                        </ul>
                    </div>
                </div>
                <div className="footer-follow">
                    <a href="https://github.com/kartheekl68" target="_blank" rel="noopener noreferrer"><img src={github} alt="follome-github"/></a>
                    <a href="https://www.instagram.com/kar_thinks/" target="_blank" rel="noopener noreferrer"><img src={instgram} alt="follome-instagram"/></a>
                    <a href="https://twitter.com/kartheekl68" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="follome-twitter"/></a>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent;