import React from 'react';

const SingleMixPost = ({ image, category, date, title }) => {
    return (
        <div className="single_post post_type6 post_type9">
            <div className="post_img gradient1">
                <div className="img_wrap">
                    <a className="play_btn" href="#">
                        <img src={image} alt="" />
                    </a>
                </div>	<span className="tranding">
                    <i className="fas fa-play"></i>
                </span>
            </div>
            <div className="single_post_text">
                <div className="meta">	<a href="#" > {category} </a>
                    <a href="#"> {date} </a>
                </div>
                <h4><a href="video_post1.html"> {title} </a></h4>
            </div>
        </div>
    );
};

export default SingleMixPost;