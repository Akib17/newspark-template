import React from 'react';

const Copywrite = () => {
    return (
        <div className="row">
            <div className="col-lg-6 align-self-center">
                <p>&copy; Copyright 2020, All Rights Reserved</p>
            </div>
            <div className="col-lg-6 align-self-center">
                <div className="copyright_menus text-right">
                    <div className="language"></div>
                    <div className="copyright_menu inline">
                        <ul>
                            <li><a href="#">About</a>
                            </li>
                            <li><a href="#">Advertise</a>
                            </li>
                            <li><a href="#">Privacy & Policy</a>
                            </li>
                            <li><a href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copywrite;