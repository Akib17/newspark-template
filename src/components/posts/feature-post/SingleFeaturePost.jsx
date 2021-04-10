import React from 'react';

const SingleFeaturePost = ({ image, category, date, title }) => {
    return (
        <div className="single_post post_type6 post_type7">
            <div className="post_img gradient1">
                <a href="#">
                    <img src={image} alt="" />
                </a>
            </div>
            <div className="single_post_text">
                <div className="meta5">	<a href="#">{category}</a>
                    <a href="#">{date}</a>
                </div>
                <h4>
                    <a href="post1.html"> {title} </a>
                </h4>
            </div>
        </div>
    );
};

export default SingleFeaturePost;