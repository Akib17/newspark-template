import React from 'react';

const SingleSideBarItem = ({ image, category, date, title }) => {
    return (
        <div>
            <div className="single_post widgets_small">
                <div className="post_img">
                    <div className="img_wrap">
                        <a href="#">
                            <img src={image} alt="" />
                        </a>
                    </div>
                </div>
                <div className="single_post_text">
                    <div className="meta2 meta_separator1">	<a href="#"> {category} </a>
                        <a href="#"> {date} </a>
                    </div>
                    <h4><a href="post1.html"> {title} </a></h4>
                </div>
            </div>
            <div className="space-15"></div>
            <div className="border_black"></div>
            <div className="space-15"></div>
        </div>
    );
};

export default SingleSideBarItem;