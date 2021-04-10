import React from 'react';
import Banner from '../../assets/img/bg/banner1.png';
import Logo from '../../assets/img/logo/logo.png';

const LogoArea = () => {
    return (
        <div class="logo_area white_bg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 align-self-center">
                        <div class="logo">
                            <a href="index.html">
                                <img src={Logo} alt="image" />
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-8 align-self-center">
                        <div class="banner1">
                            <a href="#">
                                <img src={Banner} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogoArea;