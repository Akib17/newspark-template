import React from 'react';
import Img1 from '../../../assets/img/header/slider/hside1.jpg';
import SinglePostCarousel from './SinglePostCarousel';

const PostCarousel = () => {
    return (
        <div class="fifth_bg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="carousel_posts1 owl-carousel nav_style2 mb40 mt30">

                            <SinglePostCarousel image={Img1} title="U.S. Response subash says he will label regions by risk of…" description="People have been infected in United…" />

                            <SinglePostCarousel image={Img1} title="U.S. Response subash says he will label regions by risk of…" description="People have been infected in United…" />

                            <SinglePostCarousel image={Img1} title="U.S. Response subash says he will label regions by risk of…" description="People have been infected in United…" />

                            <SinglePostCarousel image={Img1} title="U.S. Response subash says he will label regions by risk of…" description="People have been infected in United…" />

                            <SinglePostCarousel image={Img1} title="U.S. Response subash says he will label regions by risk of…" description="People have been infected in United…" />

                            <SinglePostCarousel image={Img1} title="U.S. Response subash says he will label regions by risk of…" description="People have been infected in United…" />


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCarousel;