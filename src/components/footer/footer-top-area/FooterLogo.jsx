import React from 'react';

const FooterLogo = ({image}) => {
    return (
        <div className="footer_logo logo">
            <a href="index.html">
                <img src={image} alt="logo" />
            </a>
        </div>
    );
};

export default FooterLogo;