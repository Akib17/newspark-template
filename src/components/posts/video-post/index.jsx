import React from 'react';
import Image from '../../../assets/img/video/video1.jpg';
import FeatureVideoPost from './FeatureVideoPost';
import SingleVideoPost from './SingleVideoPost';

const VideoPost = () => {
    return (
        <div className="video_posts pt30 half_bg60">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading white">
                            <h2 className="widget-title">Video News</h2>
                        </div>
                    </div>
                </div>
                <div className="space-50"></div>
                <div className="viceo_posts_wrap">
                    <div className="row">
                        <div className="col-lg-8">

                            <FeatureVideoPost image={Image} title="Riots Report Shows London Needs To Maintain Police Numbers, Says Mayor" category="TECHNOLOGY" date="March 22, 2021" />

                        </div>
                        <div className="col-lg-4">
                            <div className="popular_carousel_area mb30 md-mt-30">
                                <h2 className="widget-title">Popular Posts</h2>
                                <div className="popular_carousel owl-carousel nav_style1">

                                    <div className="popular_items">

                                        <SingleVideoPost image={Image} title="Success is not a good food failure makes you humble" category="TECHNOLOGY" count="1" />
                                        <SingleVideoPost image={Image} title="Success is not a good food failure makes you humble" category="TECHNOLOGY" count="2" />
                                        <SingleVideoPost image={Image} title="Success is not a good food failure makes you humble" category="TECHNOLOGY" count="3" />
                                        <SingleVideoPost image={Image} title="Success is not a good food failure makes you humble" category="TECHNOLOGY" count="4" />
                                        <SingleVideoPost image={Image} title="Success is not a good food failure makes you humble" category="TECHNOLOGY" count="5" />


                                    </div>
                                    <div className="popular_items">
                                        <SingleVideoPost image={Image} title="Success is not a good food failure makes you humble" category="TECHNOLOGY" count="1" />
                                        <SingleVideoPost image={Image} title="Success is not a good food failure makes you humble" category="TECHNOLOGY" count="2" />
                                        <SingleVideoPost image={Image} title="Success is not a good food failure makes you humble" category="TECHNOLOGY" count="3" />
                                        <SingleVideoPost image={Image} title="Success is not a good food failure makes you humble" category="TECHNOLOGY" count="4" />
                                        <SingleVideoPost image={Image} title="Success is not a good food failure makes you humble" category="TECHNOLOGY" count="5" />

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

export default VideoPost;