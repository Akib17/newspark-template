import React from 'react';

const SingleEntertainmentPost = ({ image, category, date, title, description }) => {
    return (
        <div className="col-md-6">
            <div className="single_post post_type3 mb30">
                <div className="post_img">
                    <div className="img_wrap">
                        <a href="#">
                            <img src={image} alt="" />
                        </a>
                    </div>
                </div>
                <div className="single_post_text">
                    <div className="meta3">	<a href="#"> {category} </a>
                        <a href="#"> {date} </a>
                    </div>
                    <h4><a href="post1.html"> {title} </a></h4>
                    <div className="space-10"></div>
                    <p className="post-p"> {description} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleEntertainmentPost;