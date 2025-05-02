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
        <div className="hidden md:block bg-white text-black shadow-md ">
            <div className="first_Navbar flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Brand / Heading */}
                <div className="text-center md:text-left">
                    <h1 className="text-lg md:text-2xl font-bold tracking-wide uppercase text-yellow-700 navbar_Heading">Labour at your door!</h1>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-2 text-sm md:text-base text-center md:text-left">
                    <div className="flex items-center gap-1">
                        <FaPhoneAlt className="text-blue-600" />
                        <span className='spanPara'>+923093238209</span>
                    </div>
                    <span className="hidden sm:inline-block">|</span>
                    <div className="flex items-center gap-1">
                        <FaEnvelope className="text-blue-600" />
                        <span className='spanPara'>tameerkarachi@gmail.com</span>
                    </div>
                    <span className="hidden sm:inline-block">|</span>
                    <div className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-blue-600" />
                        <span className='spanPara'>Karachi, Pakistan</span>
                    </div>
                </div>

                {/* Social Icons */}
                <div className="flex justify-center gap-2 text-lg md:text-xl">
                    <a href="https://www.facebook.com/profile.php?id=61575694808911">
                    <img src={Facebook} className="Navbar_Icons h-9 cursor-pointer" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61575694808911">
                    <img src={Instagram} className="Navbar_Icons h-9 cursor-pointer" />
                    </a>
                    <a href="https://www.youtube.com/@tameerkhi">
                    <img src={Linkedin} className="Navbar_Icons h-9 cursor-pointer" />  
                    </a>
                    <a href="https://www.youtube.com/@tameerkhi">
                    <img src={Youtube} className="Navbar_Icons h-9 cursor-pointer" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FirstNavbarCon;
