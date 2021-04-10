import React from 'react';

const SingleUpcomingMatch = ({image, team1, team2, date, time }) => {
    return (
        <div>
            <div className="single_post post_type13 widgets_small">
                <div className="post_img">
                    <a href="#">
                        <img src={image} alt="" />
                    </a>
                </div>
                <div className="single_post_text">
                    <h4><a href="#" className="playing_teams">{team1} <span>VS &nbsp;</span> {team2} </a></h4>
                    <p className="meta macth_meta"> {date} <span> {time} </span> &nbsp;</p>
                </div>
                <div className="circle_match_time">
                    <div className="first_circle circle"></div>
                </div>
            </div>
            <div className="space-10"></div>
            <div className="border_black"></div>
            <div className="space-10"></div>
        </div>
    );
};

export default SingleUpcomingMatch;