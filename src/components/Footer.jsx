import React from 'react';
import fb from '../img/fb-Icon.png';
import insta from '../img/insta-Icon.svg';
import twitter from '../img/twitter-Icon.svg';

const Footer = () => {
    return (
        <div className="bg-black flex flex-col items-center justify-center px-4 py-5">
            <div className="flex items-center gap-6">
                <a href="https://instagram.com">
                    <img className="w-8 h-8" src={insta} alt="Instagram" />
                </a>
                <a href="https://facebook.com">
                    <img className="w-8 h-8" src={fb} alt="Facebook" />
                </a>
                <a href="https://twitter.com">
                    <img className="w-8 h-8" src={twitter} alt="Twitter" />
                </a>
            </div>
            <p className="text-white text-center mt-2">&copy;2023 workflow, inc. All rights reserved.</p>
        </div>

    );
};

export default Footer;
