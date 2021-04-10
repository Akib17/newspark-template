import React from 'react';
import Image from '../../../../assets/img/entertrainment/enter1.jpg';
import SingleUpcomingMatch from '../single-post-type/SingleUpcomingMatch';

const UpcomingMatchNews = () => {
    return (
        <div className="widget upcomming_macth mb30">
            <div className="row">
                <div className="col-8 align-self-center">
                    <h2 className="widget-title">Upcoming Matches</h2>
                </div>
                <div className="col-4 text-right align-self-center">	<a href="#" className="see_all mb20">See All</a>
                </div>
            </div>

            {/* Single Upcoming Match */}

            <SingleUpcomingMatch image={Image} team1="Germany" team2="Brazil" date="Tomorrow" time="M22:30 (CST)" />

            <SingleUpcomingMatch image={Image} team1="Spain" team2="France" date="12th April" time="M22:30 (CST)" />

            <SingleUpcomingMatch image={Image} team1="Germany" team2="Brazil" date="Tomorrow" time="M22:30 (CST)" />

            <SingleUpcomingMatch image={Image} team1="Germany" team2="Brazil" date="Tomorrow" time="M22:30 (CST)" />

            <SingleUpcomingMatch image={Image} team1="Germany" team2="Brazil" date="Tomorrow" time="M22:30 (CST)" />


        </div>
    );
};

export default UpcomingMatchNews;