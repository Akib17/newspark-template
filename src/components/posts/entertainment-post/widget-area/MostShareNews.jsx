import React from 'react';
import MostShareSinglePost from '../MostShareSinglePost';
import Image from '../../../../assets/img/entertrainment/enter1.jpg';

const MostShareNews = () => {
    return (
        <div className="widget mb30">
            <h2 className="widget-title">Most share</h2>
            <div className="widget4_carousel owl-carousel nav_style1">
                {/* Carousel Start */}
                <div className="carousel_items">

                    <MostShareSinglePost count="1" category="BUSINESS" date="April 1, 2021" title="Copa America: Luis Suarez from devastated US" facebook="2.1k" twitter="1.4k" /> 

                    <MostShareSinglePost count="2" category="SHOWBIZ" date="April 1, 2021" title="Copa America: Luis Suarez from devastated US" facebook="2.1k" twitter="1.4k" />

                    <MostShareSinglePost count="3" category="BUSINESS" date="April 1, 2021" title="Copa America: Luis Suarez from devastated US" facebook="2.1k" twitter="1.4k" />

                    <MostShareSinglePost count="4" category="TECHNOLOGY" date="April 1, 2021" title="Copa America: Luis Suarez from devastated US" facebook="2.1k" twitter="1.4k" />

                    <MostShareSinglePost count="5" category="FINANCE" date="April 1, 2021" title="Copa America: Luis Suarez from devastated US" facebook="2.1k" twitter="1.4k" />


                </div>
                <div className="carousel_items">


                    <MostShareSinglePost count="1" category="BUSINESS" date="April 1, 2021" title="Copa America: Luis Suarez from devastated US" facebook="2.1k" twitter="1.4k" />

                    <MostShareSinglePost count="2" category="SHOWBIZ" date="April 1, 2021" title="Copa America: Luis Suarez from devastated US" facebook="2.1k" twitter="1.4k" />

                    <MostShareSinglePost count="3" category="BUSINESS" date="April 1, 2021" title="Copa America: Luis Suarez from devastated US" facebook="2.1k" twitter="1.4k" />

                    <MostShareSinglePost count="4" category="TECHNOLOGY" date="April 1, 2021" title="Copa America: Luis Suarez from devastated US" facebook="2.1k" twitter="1.4k" />

                    <MostShareSinglePost count="5" category="FINANCE" date="April 1, 2021" title="Copa America: Luis Suarez from devastated US" facebook="2.1k" twitter="1.4k" />


                </div>
            </div>
            {/* Carousel End */}
        </div>
    );
};

export default MostShareNews;