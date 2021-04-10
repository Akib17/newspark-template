import React from 'react';
import Footer from '../../components/footer';
import LogoArea from '../../components/logo-area';
import Navigation from '../../components/Navigation';
import EntertainmentPost from '../../components/posts/entertainment-post';
import FeaturePost from '../../components/posts/feature-post';
import MixPostSlide from '../../components/posts/mix-post-slide';
import PostGallery from '../../components/posts/post-gallery';
import PostCarousel from '../../components/posts/top-post-carousel';
import TrendingPost from '../../components/posts/trending-post';
import VideoPost from '../../components/posts/video-post';
import SearchBar from '../../components/search-bar/SearchBar';
import TopBar from '../../components/top-bar/TopBar';

const Home = () => {
    return (
        <div>
            <SearchBar />
            <TopBar />
            <div class="border_black"></div>
            <LogoArea />
            <Navigation />
            <PostCarousel />
            <PostGallery />
            <FeaturePost />
            <TrendingPost />
            <MixPostSlide />
            <VideoPost />
            <EntertainmentPost />
            <div class="space-70"></div>
            <Footer />
        </div>
    );
};

export default Home;