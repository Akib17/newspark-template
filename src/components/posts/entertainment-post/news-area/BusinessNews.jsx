import React from 'react';
import SingleBusinessPost from '../single-post-type/SingleBusinessPost';
import Image from '../../../../assets/img/entertrainment/enter1.jpg';

const BusinessNews = () => {
    return (
        <div className="businerss_news">
            <div className="row">
                <div className="col-6 align-self-center">
                    <h2 className="widget-title">Business News</h2>
                </div>
                <div className="col-6 text-right align-self-center">	<a href="#" className="see_all mb20">See All</a>
                </div>
            </div>
            <div className="row">
                <div className="col-12">

                    <SingleBusinessPost image={Image} category="BUSINESS" date="March 30, 2020" title="Copa America: Luis Suarez from devastated US" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…" />

                    <SingleBusinessPost image={Image} category="BUSINESS" date="March 30, 2020" title="Copa America: Luis Suarez from devastated US" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…" />

                    <SingleBusinessPost image={Image} category="BUSINESS" date="March 30, 2020" title="Copa America: Luis Suarez from devastated US" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with…" />


                </div>
            </div>
        </div>
    );
};

export default BusinessNews;