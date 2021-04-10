import React from 'react';
import Image from '../../../assets/img/entertrainment/enter1.jpg';
import Icon from '../../../assets/img/icon/union.png';
import Category from '../../category/Category';
import Newsletter from '../../newsletter/Newsletter';
import BusinessNews from './news-area/BusinessNews';
import EntertainmentNews from './news-area/EntertainmentNews';
import SportsNews from './news-area/SportsNews';
import MostShareNews from './widget-area/MostShareNews';
import UpcomingMatchNews from './widget-area/UpcomingMatchNews';

const EntertainmentPost = () => {
    return (
        <div className="entertrainments">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12">
                                <div className="heading">
                                    <h2 className="widget-title">Entertrainment News</h2>
                                </div>
                            </div>
                        </div>
                        <div className="entertrainment_carousel mb30">

                            <EntertainmentNews />

                        </div>
                        {/* Carousel End */}
                        <div className="row">
                            <div className="col-12">

                                {/* Sports News area */}
                                <SportsNews />

                            </div>
                        </div>
                        <div className="banner_area mt50 mb60 xs-mt60">
                            <a href="#">
                                <img src={Image} alt="" />
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-12">

                                {/* Business News area */}
                                <BusinessNews />

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-md-6 col-lg-12">
                                {/* Most Share Post */}
                                <MostShareNews />
                                {/* Most Share Post End */}
                            </div>
                            <div className="col-md-6 col-lg-12">
                                {/* Upcoming Match Area Start */}
                                <UpcomingMatchNews />
                                {/* Upcoming Match Area END */}
                            </div>
                            <div className="col-md-6 col-lg-12">

                                {/* Newsletter */}
                                <Newsletter title="News Letter" subtitle="Your email address will not be this published. Required fields are News Today." description="We hate spam as much as you do" />

                            </div>
                            <div className="col-md-6 col-lg-12">
                                <div className="widget category mb30">
                                    <div className="row">
                                        <div className="col-6 align-self-center">
                                            <h2 className="widget-title">Categories</h2>
                                        </div>
                                        <div className="col-6 text-right align-self-center">	<a href="#" className="see_all mb20">See All</a>
                                        </div>
                                    </div>
                                    <ul>
                                        {/* Categories */}

                                        <Category name="Restaurant" Icon={Icon} />
                                        <Category name="Entertainment" Icon={Icon} />
                                        <Category name="Business" Icon={Icon} />
                                        <Category name="Features" Icon={Icon} />
                                        <Category name="Trending" Icon={Icon} />
                                        <Category name="Sports" Icon={Icon} />

                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-12">
                                <div className="banner2 mb30">
                                    <a href="#">
                                        <img src={Image} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EntertainmentPost;