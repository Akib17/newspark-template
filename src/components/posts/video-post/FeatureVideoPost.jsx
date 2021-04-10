import React from 'react';

const FeatureVideoPost = ({image, category, date, title}) => {
    return (
        <div className="single_post post_type3 post_type11 margintop-60- xs-mb30">
            <div className="post_img">
                <div className="img_wrap">
                    <a href="#" className="play_btn">
                        <img src={image} alt="" />
                    </a>
                </div>	<a href="#" className="youtube_middle"><i className="fab fa-youtube"></i></a>
            </div>
            <div className="single_post_text padding30 fourth_bg">
                <div className="meta3">	<a href="#"> {category} </a>
                    <a href="#"> {date} </a>
                </div>
                <h4><a href="post1.html"> {title} </a></h4>
            </div>
        </div>
    );
};

export default FeatureVideoPost;