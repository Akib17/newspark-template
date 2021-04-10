import React from 'react';

const MostShareSinglePost = ({ count, category, date, title, twitter, facebook }) => {
    return (
        <div>
            <div className="single_post widgets_small widgets_type4">
                <div className="post_img number">
                    <h2> {count} </h2>
                </div>
                <div className="single_post_text">
                    <div className="meta2">	<a href="#"> {category} </a>
                        <a href="#"> {date} </a>
                    </div>
                    <h4><a href="#"> {title} </a></h4>
                    <ul className="inline socail_share">
                        <li>	<a href="#"><i className="fab fa-twitter"></i> {twitter} </a>
                        </li>
                        <li>	<a href="#"><i className="fab fa-facebook-f"></i> {facebook} </a>
                        </li>
                    </ul>
                    <div className="space-15"></div>
                    <div className="border_black"></div>
                </div>
            </div>
            <div className="space-15"></div>
        </div>
    );
};

export default MostShareSinglePost;