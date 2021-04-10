import React from 'react';
import Image from '../../../assets/img/trending/trendbig1.jpg';
import SingleSideBarItem from '../post-gallery/SingleSideBarItem';
import SingleTrendingPost from './SingleTrendingPost';

const TrendingPost = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-8">
                    <h2 className="widget-title">Trending News</h2>
                    <div className="carousel_post2_type3 nav_style1 owl-carousel">

                        <SingleTrendingPost image={Image} category="TECHNOLOGY" date="March 20, 2021" title="There may be no consoles in the future ea exec says" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                        <SingleTrendingPost image={Image} category="TECHNOLOGY" date="March 20, 2021" title="There may be no consoles in the future ea exec says" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                        <SingleTrendingPost image={Image} category="TECHNOLOGY" date="March 20, 2021" title="There may be no consoles in the future ea exec says" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                        <SingleTrendingPost image={Image} category="TECHNOLOGY" date="March 20, 2021" title="There may be no consoles in the future ea exec says" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                    </div>
                    <div className="border_black"></div>
                    <div className="space-30"></div>
                    <div className="row">
                        <div className="col-lg-6">

                            <SingleSideBarItem image={Image} category="TECHNOLOGY" date="March 23, 2021" title="There may be no consoles in the future ea exec says" />

                            <SingleSideBarItem image={Image} category="TECHNOLOGY" date="March 23, 2021" title="There may be no consoles in the future ea exec says" />

                            <SingleSideBarItem image={Image} category="TECHNOLOGY" date="March 23, 2021" title="There may be no consoles in the future ea exec says" />


                        </div>
                        <div className="col-lg-6">


                            <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />

                            <SingleSideBarItem image={Image} category="POLITICS" date="March 23, 2021" title="There may be no consoles in the future ea exec says" />

                            <SingleSideBarItem image={Image} category="SHOWBIZ" date="March 23, 2021" title="There may be no consoles in the future ea exec says" />

                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="follow_box widget mb30">
                        <h2 className="widget-title">Follow Us</h2>
                        <div className="social_shares">
                            <a className="single_social social_facebook" href="#">	<span className="follow_icon"><i className="fab fa-facebook-f"></i></span>
							34,456 <span className="icon_text">Fans</span>
                            </a>
                            <a className="single_social social_twitter" href="#">	<span className="follow_icon"><i className="fab fa-twitter"></i></span>
							34,456 <span className="icon_text">Followers</span>
                            </a>
                            <a className="single_social social_youtube" href="#">	<span className="follow_icon"><i className="fab fa-youtube"></i></span>
							34,456 <span className="icon_text">Subscribers</span>
                            </a>
                            <a className="single_social social_instagram" href="#">	<span className="follow_icon"><i className="fab fa-instagram"></i></span>
							34,456 <span className="icon_text">Followers</span>
                            </a>
                            <a className="single_social social_vimeo" href="#">	<span className="follow_icon"><i className="fab fa-vimeo-v"></i></span>
							34,456 <span className="icon_text">Followers</span>
                            </a>
                            <a className="single_social social_medium" href="#">	<span className="follow_icon"><i className="fab fa-medium-m"></i></span>
							34,456 <span className="icon_text">Followers</span>
                            </a>
                        </div>
                    </div>

                    <div className="widget tab_widgets mb30">
                        <h2 className="widget-title">Most View</h2>
                        <div className="post_type2_carousel owl-carousel nav_style1">

                            <div className="single_post2_carousel">
                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />
                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />

                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />

                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />

                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />

                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />
                            </div>
                            <div className="single_post2_carousel">

                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />
                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />

                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />

                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />

                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />

                                <SingleSideBarItem image={Image} category="BUSINESS" date="March 25, 2021" title="There may be no consoles in the future ea exec says" />

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingPost;