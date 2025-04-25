import React, { useEffect } from 'react';
import AOS from 'aos';
import './AnimationCon.css';
import 'aos/dist/aos.css';
import Image from '../Images/Image_2.jpeg'; // background image
import Image_1 from '../Images/Karachi_Img01.jpg';
import Image_2 from '../Images/Karachi_Img02.jpg';
import Image_3 from '../Images/Karachi_Img03.jpg';
import Image_4 from '../Images/Karachi_Img04.jpg';
import Image_5 from '../Images/Karachi_Img05.jpg';
import Image_6 from '../Images/Karachi_Img06.jpg';

const AnimationCon = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const images = [Image_1, Image_2, Image_3, Image_4, Image_5, Image_6];

    return (
        <div className="relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm z-0"
                style={{ backgroundImage: `url(${Image})` }}
            ></div>

            {/* Overlay Content */}
            <div className="relative z-10 px-6 py-14">
                <h1 className="text-5xl text-center mb-16 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" data-aos="fade-down">
                    Our Work!
                </h1>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {images.map((imgSrc, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in-up"
                            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 bg-white bg-opacity-90 border"
                        >
                            <img
                                src={imgSrc}
                                alt={`Animation ${index + 1}`}
                                className="w-full h-64 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnimationCon;
