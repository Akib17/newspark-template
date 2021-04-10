import React from 'react';
import SingleSideBar from './SingleSideBar';

const SideBarPost = () => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="widget_tab md-mt-30">
                <ul className="nav nav-tabs">
                    <li><a className="active" data-toggle="tab" href="#post1">RELATED</a>
                    </li>
                    <li><a data-toggle="tab" href="#post2">RELATED</a>
                    </li>
                    <li><a data-toggle="tab" href="#post3">POPULAR</a>
                    </li>
                </ul>
                <div className="tab-content">

                    <SingleSideBar active postId="post1" />
                    <SingleSideBar postId="post2" />
                    <SingleSideBar postId="post3" />


                </div>
            </div>
        </div>
    );
};

export default SideBarPost;