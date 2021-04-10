import React from 'react';

const NewsCategories = () => {
    return (
        <div>
            <div className="single_footer_nav border_white_right">
                <h3 className="widget-title2">News categories</h3>
                <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            <li><a href="#">Politics</a>
                            </li>
                            <li><a href="#">Business</a>
                            </li>
                            <li><a href="#">TECHNOLOGY</a>
                            </li>
                            <li><a href="#">Science</a>
                            </li>
                            <li><a href="#">Health</a>
                            </li>
                            <li><a href="#">Sports</a>
                            </li>
                            <li><a href="#">Entertainment</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li><a href="#">Education</a>
                            </li>
                            <li><a href="#">Obituaries</a>
                            </li>
                            <li><a href="#">Corrections</a>
                            </li>
                            <li><a href="#">Education</a>
                            </li>
                            <li><a href="#">Today’s Paper</a>
                            </li>
                            <li><a href="#">Corrections</a>
                            </li>
                            <li><a href="#">Foods</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCategories;