import React from 'react';
import '../../assets/scss/main-nav.scss';

const Navigation = () => {
    return (
        <div className="main-menu theme-1" id="header">	<a href="#top" className="up_btn up_btn1"><i className="far fa-chevron-double-up"></i></a>
            <div className="main-nav clearfix is-ts-sticky">
                <div className="container">
                    <div className="row justify-content-between">
                        <nav className="navbar navbar-expand-lg col-lg-8 align-self-center">
                            <div className="site-nav-inner">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">	<span className="fa fa-bars"></span>
                                </button>
                                <div id="navbarSupportedContent" className="collapse navbar-collapse navbar-responsive-collapse">
                                    <ul className="nav navbar-nav" id="scroll">
                                        <li className="nav-item dropdown active">	<a href="#" className="menu-dropdown" data-toggle="dropdown">Home </a>
                                        </li>
                                        <li className="nav-item dropdown">	<a href="#" className="menu-dropdown" data-toggle="dropdown">Categores <i className="fal fa-angle-down"></i></a>
                                            <ul className="dropdown-menu" role="menu">
                                                <li><a href="business.html">Business</a>
                                                </li>
                                                <li><a href="entertainment.html">Entertainment</a>
                                                </li>
                                                <li><a href="feature.html">Features</a>
                                                </li>
                                                <li><a href="sports.html">Sports</a>
                                                </li>
                                                <li><a href="trending.html">Trending</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">	<a href="#" className="menu-dropdown" data-toggle="dropdown">Pages <i className="fal fa-angle-down"></i></a>
                                            <ul className="dropdown-menu" role="menu">
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="archive.html">Archive</a></li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                                <li><a href="404.html">404</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">	<a href="#" className="dropdown-toggle menu-dropdown" data-toggle="dropdown">Posts <i className="fal fa-angle-down"></i></a>
                                            <ul className="dropdown-menu" role="menu">
                                                <li className="dropdown-submenu"><a href="#." className="menu-dropdown">General Posts</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="post1.html">Post 1</a></li>
                                                        <li><a href="post2.html">Post 2</a></li>
                                                        <li><a href="post3.html">Post 3</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a href="#." className="menu-dropdown">Video Posts</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="video_post1.html">Video Style 1</a></li>
                                                        <li><a href="video_post2.html">Video Style 2</a></li>
                                                        <li><a href="video_post3.html">Video Style 3</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a href="#." className="menu-dropdown">Audio Posts</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="audio_post1.html">Audio Style 1</a></li>
                                                        <li><a href="audio_post2.html">Audio Style 2</a></li>
                                                        <li><a href="audio_post3.html">Audio Style 3</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu">	<a href="#." className="menu-dropdown">Sidebars</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a href="post1.html">Right Sidebar</a></li>
                                                        <li><a href="left_post2.html">Left Sidebar</a></li>
                                                        <li><a href="post2.html">No Sidebar</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="#world">World</a></li>
                                        <li><a href="#sports">Sports</a></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div className="col-lg-4 align-self-center">
                            <div className="menu_right">
                                <div className="users_area">
                                    <ul className="inline">
                                        <li className="search_btn"><i className="far fa-search"></i>
                                        </li>
                                        <li><i className="fal fa-user-circle"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div className="lang d-none d-xl-block">
                                    <ul>
                                        <li><a href="#">English <i className="far fa-angle-down"></i></a>
                                            <ul>
                                                <li><a href="#">Spanish</a>
                                                </li>
                                                <li><a href="#">China</a>
                                                </li>
                                                <li><a href="#">Hindi</a>
                                                </li>
                                                <li><a href="#">Corian</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="temp d-none d-lg-block">
                                    <div className="temp_wap">
                                        <div className="temp_icon">
                                            <img src="assets/img/icon/temp.png" alt="" />
                                        </div>
                                        <h3 className="temp_count">13</h3>
                                        <p>San Francisco</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;