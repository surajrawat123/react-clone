import React from 'react'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom'
// import lang from './language.svg'
import {ReactComponent as LangLogo} from "./language.svg"
import "./Header.scss"

const Header = () => {
    return (
        <div className='header'>
            <ul className='nav-bar'>
                <li className='nav-item react-page'>
                    <img src={logo} className='app-logo' alt='react logo' />
                    <Link to="/" className='link'>React</Link>
                </li>
                <div className='nav-div'>
                    <li className='nav-item'>
                        <Link to="/docs" className='link'>Docs</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/tutorial" className='link'>Tutorial</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/blog" className='link'>Blog</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/community" className='link'>Community</Link>
                    </li>
                </div>
                <li className='nav-item search-bar'>
                    <div className='search-div'>
                        <span><i className="fas fa-search"></i></span>
                        <input type="text" placeholder='Search' className='search-input' />
                    </div>
                </li>
                <div className='nav-div-right'>
                    <li className='nav-item'>
                        <Link to="/version" className='link'>v17.0.2</Link>
                    </li>
                    <li className='nav-item nav-lang-logo'>
                        {/* <img src={lang} alt="language logo" className='lang-logo' /> */}
                        <LangLogo className="lang-logo" fill="white" />
                        <Link to="/language" className='link'>Languages</Link>
                    </li>
                    <li className='nav-item'>
                        <a href="https://github.com/facebook/react/" target="_blank" className='link'>GitHub</a>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Header
