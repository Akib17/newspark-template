import React from 'react';

const SinglePostCarousel = ({ image, title, description }) => {
    return (
        <div class="single_post widgets_small post_type5">
            <div class="post_img">
                <div class="img_wrap">
                    <a href="#">
                        <img src={image} alt="" />
                    </a>
                </div>
            </div>
            <div class="single_post_text">
                <h4><a href="post1.html"> {title} </a></h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SinglePostCarousel;