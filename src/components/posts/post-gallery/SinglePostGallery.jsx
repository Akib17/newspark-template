import React from 'react';

const SinglePostGallery = ({ siderTop, category, date, title, description }) => {
    return (
        <div className="single_post post_type6 xs-mb30">
            <div className="post_img gradient1">
                <img src={siderTop} alt="" />	<span className="tranding" public>
                    <i className="fas fa-play"></i>
                </span>
            </div>
            <div className="single_post_text">
                <div className="meta meta_separator1">	<a href="#"> {category} </a>
                    <a href="#">{date}</a>
                </div>
                <h4><a href="video_post1.html"> {title} </a></h4>
                <div className="space-10"></div>
                <p className="post-p"> {description} </p>
            </div>
        </div>
    );
};

export default SinglePostGallery;