import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';
import $ from 'jquery/';
import 'malihu-custom-scrollbar-plugin/';
import 'malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css';
import 'jquery-mousewheel';

class CustomNavbar extends Component {
    componentDidMount() {
        $(window).on("load",function(){
            $('.mega_menu_two .scroll').mCustomScrollbar({
                mouseWheelPixels: 50,
                scrollInertia: 0
            })
        })
    }
    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass} =this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <Link className={`navbar-brand ${slogo}`} to="/">
                    
                            <img src={require("../img/amasW.png")} alt=""/>
                            <img src={require("../img/amasC.png")} alt="logo"/>
                        </Link>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                                <li className="nav-item dropdown submenu mega_menu mega_menu_two">
                                  

                                </li>
                                <li className="nav-item"><NavLink exact title="Service" className="nav-link" to='/Pages/Service'>Services</NavLink></li>
                                <li className="dropdown submenu nav-item">
                                    <Link to="/" title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Know AmasHR</Link>
                                    <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink exact title="About" className="nav-link" to='/Pages/About'>About</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Process" className="nav-link" to='/Pages/Process'>Process</NavLink></li>
                                        <li className="nav-item"><NavLink exact title="Team" className="nav-link" to='/Pages/Team'>Team</NavLink></li>
                                    </ul>
                                </li>
                                <li className="dropdown submenu nav-item"><Link title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" to="#">HR Tools</Link>
                                    <ul role="menu" className=" dropdown-menu">
                                        <li className="nav-item"><NavLink title="Service" className="nav-link" to='/Pages/Portfolio-2col'>People Data & Analytics</NavLink></li>
                                        <li className="nav-item"><NavLink title="About" className="nav-link" to='/Pages/Portfolio-3col'>Hiring</NavLink></li>
                                        <li className="nav-item"><NavLink title="Process" className="nav-link" to='/Pages/Portfolio-fullwidth-4col'>Onboarding</NavLink></li>
                                        <li className="nav-item"><NavLink title="PortfolioSingle" className="nav-link" to='/Pages/PortfolioSingle'>Compensation</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown submenu">
                                    <a className="nav-link dropdown-toggle" href=".#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Resources
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><NavLink to="/Pages/Bloglist" className="nav-link">Performance & Culture</NavLink></li>
                                        <li className="nav-item"><NavLink to="/Pages/BlogSingle" className="nav-link">Benefit & Compensation</NavLink></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><NavLink title="Pricing" className="nav-link" to="/Pages/Contact">Contact</NavLink></li>
                            </ul>
                            <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">Get Started</a>
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}

export default CustomNavbar;