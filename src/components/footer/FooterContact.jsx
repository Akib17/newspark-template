import React from 'react';

const FooterContact = ({image}) => {
    return (
        <div className="footer_contact">
            <h3 className="widget-title2">Newspark news services</h3>
            <div className="single_fcontact">
                <div className="fcicon">
                    <img src={image} alt="" />
                </div>	<a href="#">On your mobile</a>
            </div>
            <div className="single_fcontact">
                <div className="fcicon">
                    <img src={image} alt="" />
                </div>	<a href="#">On smart speakers</a>
            </div>
            <div className="single_fcontact">
                <div className="fcicon">
                    <img src={image} alt="" />
                </div>	<a href="#">Contact Newspark news</a>
            </div>
        </div>
    );
};

export default FooterContact;