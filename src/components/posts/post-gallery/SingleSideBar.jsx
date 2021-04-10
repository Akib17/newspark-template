import React from 'react';
import SingleSideBarItem from './SingleSideBarItem';
import Image from '../../../assets/img/header/sider-top.jpg'

const SingleSideBar = ({postId, active}) => {
    return (
        <div id={postId} className={ active ? 'tab-pane fade show in active' : 'tab-pane fade show in'}>
            <div className="widget tab_widgets mb30">

                <SingleSideBarItem image={Image} category="TECHNOLOGY" date="March 26, 2020" title="Copa America: Luis Suarez from devastated US" />
                <SingleSideBarItem image={Image} category="TECHNOLOGY" date="March 26, 2020" title="Copa America: Luis Suarez from devastated US" />
                <SingleSideBarItem image={Image} category="TECHNOLOGY" date="March 26, 2020" title="Copa America: Luis Suarez from devastated US" />
                <SingleSideBarItem image={Image} category="TECHNOLOGY" date="March 26, 2020" title="Copa America: Luis Suarez from devastated US" />
                <SingleSideBarItem image={Image} category="TECHNOLOGY" date="March 26, 2020" title="Copa America: Luis Suarez from devastated US" />
                
                
            </div>
        </div>
    );
};

export default SingleSideBar;