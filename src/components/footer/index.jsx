import React from 'react';
import Image from '../../assets/img/logo/footer_logo.png';
import LivingCategory from './categories/LivingCategory';
import NewsCategories from './categories/NewsCategory';
import OpinionCategory from './categories/OpinionCategory';
import Copywrite from './Copywrite';
import FooterTop from './footer-top-area';
import FooterContact from './FooterContact';
import MoreNews from './more-news';
import TwitterFeed from './TwitterFeed';

const Footer = () => {
    return (
        <div className="footer footer_area1 primay_bg">
            <div className="container">
                <div className="cta">
                    {/* Footer Top Area */}
                    <FooterTop />


                </div>
                <div className="border_white"></div>
                <div className="space-40"></div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-sm-6 col-lg">
                                {/* News Categories */}
                                <NewsCategories />
                            </div>
                            <div className="col-sm-6 col-lg">
                                <div className="single_footer_nav">
                                    {/* Living Category Area */}
                                    <LivingCategory />
                                </div>
                            </div>
                        </div>
                        <div className="space-40"></div>
                        <div className="border_white"></div>
                        <div className="space-40"></div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-5">
                                <div className="single_footer_nav border_white_right">
                                    {/* Opinion Category */}
                                    <OpinionCategory />
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-7">
                                <div className="twitter_feeds">
                                    {/* Twitter Feed */}
                                    <TwitterFeed />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="extra_newss border_white_left pl-4">
                            {/* More News Area */}
                            <MoreNews />

                            <div className="space-40"></div>
                            <div className="border_white_bottom"></div>
                            <div className="space-40"></div>
                            {/* Footer Contact Area */}
                            <FooterContact image={Image} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    {/* Copywrite Area */}
                    <Copywrite />
                </div>
            </div>
        </div>
    );
};

export default Footer;