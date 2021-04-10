import React from 'react';
import SiderTop from '../../../assets/img/header/sider-top.jpg';
import SideBarPost from './SideBarPost';
import SingleGalleryItem from './SingleGalleryItem';
import SinglePostGallery from './SinglePostGallery';

const PostGallery = () => {
    return (
        <div className="post_gallary_area fifth_bg mb40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-md-6 col-lg-8">
                                <div className="slider_demo2">

                                    <SinglePostGallery siderTop={SiderTop} category="TECHNOLOGY" date="March 13, 2021" title="Japan’s virus success has puzzled the world. Is its luck running out?" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                    <SinglePostGallery siderTop={SiderTop} category="BUSINESS" date="March 13, 2021" title="Work underway for retail accounts for micro merchant payment" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                    <SinglePostGallery siderTop={SiderTop} category="SPORTS" date="March 13, 2021" title="Covid help fund was there. Only we did not use them" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                    <SinglePostGallery siderTop={SiderTop} category="SHOWBIZ" date="March 13, 2021" title="Japan’s virus success has puzzled the world. Is its luck running out?" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                    <SinglePostGallery siderTop={SiderTop} category="POLITICS" date="March 13, 2021" title="Work underway for retail accounts for micro merchant payment" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                    <SinglePostGallery siderTop={SiderTop} category="HISTORY" date="March 13, 2021" title="Japan’s virus success has puzzled the world. Is its luck running out?" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                    <SinglePostGallery siderTop={SiderTop} category="TECHNOLOGY" date="March 13, 2021" title="Covid help fund was there. Only we did not use them" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                    <SinglePostGallery siderTop={SiderTop} category="TECHNOLOGY" date="March 13, 2021" title="Japan’s virus success has puzzled the world. Is its luck running out?" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                    <SinglePostGallery siderTop={SiderTop} category="TECHNOLOGY" date="March 13, 2021" title="Work underway for retail accounts for micro merchant payment" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                    <SinglePostGallery siderTop={SiderTop} category="TECHNOLOGY" date="March 13, 2021" title="Japan’s virus success has puzzled the world. Is its luck running out?" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                    <SinglePostGallery siderTop={SiderTop} category="TECHNOLOGY" date="March 13, 2021" title="Covid help fund was there. Only we did not use them" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                    <SinglePostGallery siderTop={SiderTop} category="TECHNOLOGY" date="March 13, 2021" title="Japan’s virus success has puzzled the world. Is its luck running out?" description="The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with sandy shower…" />

                                </div>
                                <div className="slider_demo1">

                                    <SingleGalleryItem image={SiderTop} />
                                    <SingleGalleryItem image={SiderTop} />
                                    <SingleGalleryItem image={SiderTop} />
                                    <SingleGalleryItem image={SiderTop} />
                                    <SingleGalleryItem image={SiderTop} />
                                    <SingleGalleryItem image={SiderTop} />
                                    <SingleGalleryItem image={SiderTop} />
                                    <SingleGalleryItem image={SiderTop} />
                                    <SingleGalleryItem image={SiderTop} />
                                    <SingleGalleryItem image={SiderTop} />
                                    <SingleGalleryItem image={SiderTop} />
                                    <SingleGalleryItem image={SiderTop} />


                                </div>
                            </div>

                            <SideBarPost />
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PostGallery;