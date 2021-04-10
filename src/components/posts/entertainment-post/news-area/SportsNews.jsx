import React from 'react';
import Image from '../../../../assets/img/entertrainment/enter1.jpg';
import SingleSideBarItem from '../../post-gallery/SingleSideBarItem';

const SportsNews = () => {
    return (
        <div className="sports">
            <div className="row">
                <div className="col-12">
                    <div className="heading">
                        <h2 className="widget-title">Sports News</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="single_post post_type3 mb30">
                        <div className="post_img">
                            <a href="#">
                                <img src={Image} alt="" />
                            </a>	<span className="tranding">
                                <i className="fas fa-bolt"></i>
                            </span>
                        </div>
                        <div className="single_post_text">
                            <div className="meta3">	<a href="#">TECHNOLOGY</a>
                                <a href="#">March 26, 2020</a>
                            </div>
                            <h4><a href="post1.html">Copa America: Luis Suarez from devastated US</a></h4>
                            <div className="space-10"></div>
                            <p className="post-p">The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…</p>
                            <div className="space-20"></div>	<a href="#" className="readmore">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="sports_carousel owl-carousel nav_style1">
                        {/* Carousel Start */}
                        <div className="sports_carousel_item">

                            <SingleSideBarItem image={Image} date="February 1, 2021" title="There may be no consoles in the future ea exec says" category="MOVIES" />

                            <SingleSideBarItem image={Image} date="February 1, 2021" title="There may be no consoles in the future ea exec says" category="SONG" />

                            <SingleSideBarItem image={Image} date="February 1, 2021" title="There may be no consoles in the future ea exec says" category="THEATER" />

                            <SingleSideBarItem image={Image} date="February 1, 2021" title="There may be no consoles in the future ea exec says" category="HOLLYWOOD" />

                            <SingleSideBarItem image={Image} date="February 1, 2021" title="There may be no consoles in the future ea exec says" category="MOVIES" />

                        </div>
                        <div className="sports_carousel_item">
                            <SingleSideBarItem image={Image} date="February 1, 2021" title="There may be no consoles in the future ea exec says" category="MOVIES" />

                            <SingleSideBarItem image={Image} date="February 1, 2021" title="There may be no consoles in the future ea exec says" category="SONG" />

                            <SingleSideBarItem image={Image} date="February 1, 2021" title="There may be no consoles in the future ea exec says" category="THEATER" />

                            <SingleSideBarItem image={Image} date="February 1, 2021" title="There may be no consoles in the future ea exec says" category="HOLLYWOOD" />

                            <SingleSideBarItem image={Image} date="February 1, 2021" title="There may be no consoles in the future ea exec says" category="MOVIES" />
                        </div>
                    </div>
                    {/* Carousel End */}
                </div>
            </div>
        </div>
    );
};

export default SportsNews;