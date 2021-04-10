import React from 'react';

const SingleVideoPost = ({ image, title, category, count }) => {
    return (
        <div className="single_post type10 widgets_small mb15">
            <div className="post_img">
                <div className="img_wrap">
                    <a href="#">
                        <img src={image} alt="" />
                    </a>
                </div>	<span className="tranding tranding_border">
                    {count}
											</span>
            </div>
            <div className="single_post_text">
                <h4><a href="post1.html"> {title} </a></h4>
                <div className="meta4">	<a href="#"> {category} </a>
                </div>
            </div>
        </div>
    );
};

export default SingleVideoPost;