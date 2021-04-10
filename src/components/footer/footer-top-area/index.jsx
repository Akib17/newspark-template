import React from 'react';
import Image from '../../../assets/img/logo/footer_logo.png';
import FooterLogo from './FooterLogo';
import FooterSocialMenu from './FooterSocialMenu';
import SignUpForm from './SignUpForm';

const FooterTop = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-6 align-self-center">
                    {/* Footer Logo */}
                    <FooterLogo image={Image} />
                    {/* Footer social Menu */}
                    <FooterSocialMenu />
                </div>
                <div className="col-md-6 col-lg-4 offset-lg-2 align-self-center">
                    <SignUpForm />
                </div>
            </div>
        </div>
    );
};

export default FooterTop;