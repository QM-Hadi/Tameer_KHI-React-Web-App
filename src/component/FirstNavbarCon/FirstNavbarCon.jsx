import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt
} from 'react-icons/fa';
import './FirstNavbarCon.css'
import Facebook from '../Images/Facebook_Icon.png'
import Instagram from '../Images/Instagram-Icon.png'
import Linkedin from '../Images/Linkedin_Icon.png'
import Youtube from '../Images/Youtube-Icon.png'


const FirstNavbarCon = () => {
    return (
        <div className="hidden md:block bg-white text-black shadow-md">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Brand / Heading */}
                <div className="text-center md:text-left">
                    <h1 className="text-lg md:text-xl font-bold tracking-wide uppercase navbar_Heading">Aye Karachi Banaye!</h1>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-2 text-sm md:text-base text-center md:text-left">
                    <div className="flex items-center gap-1">
                        <FaPhoneAlt className="text-yellow-300" />
                        <span>+92093238209</span>
                    </div>
                    <span className="hidden sm:inline-block">|</span>
                    <div className="flex items-center gap-1">
                        <FaEnvelope className="text-yellow-300" />
                        <span>tameerkhi@gmail.com</span>
                    </div>
                    <span className="hidden sm:inline-block">|</span>
                    <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-yellow-300" />
                        <span>Karachi, Pakistan</span>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-2 text-lg md:text-xl">
                    <img src={Facebook} className="Navbar_Icons h-8 cursor-pointer" />
                    <img src={Instagram} className="Navbar_Icons h-8 cursor-pointer" />
                    <img src={Linkedin} className="Navbar_Icons h-8 cursor-pointer" />  
                    <img src={Youtube} className="Navbar_Icons h-8 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default FirstNavbarCon;
