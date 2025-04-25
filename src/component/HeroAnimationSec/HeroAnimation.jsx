import React from 'react';
import Image_1 from '../Images/Karachi_Img01.jpg';
import Image_2 from '../Images/Karachi_Img02.jpg';
import Image_3 from '../Images/Karachi_Img03.jpg';
import Image_4 from '../Images/Karachi_Img04.jpg';
import Image_5 from '../Images/Karachi_Img05.jpg';
import Image_6 from '../Images/Karachi_Img06.jpg';
import './HeroAnimation.css'; // Ensure scrollRow animation CSS is defined here

const cityData = [
    { image: Image_1, name: 'Karachi' },
    { image: Image_2, name: 'Karachi' },
    { image: Image_3, name: 'Karachi' },
    { image: Image_4, name: 'Karachi' },
    { image: Image_5, name: 'Karachi' },
    { image: Image_6, name: 'Karachi' }
];

const HeroAnimation = () => {
    return (
        <>
            {/* Main Background with Image */}
            <div
                className="relative overflow-hidden w-full min-h-[300px] bg-cover bg-center"
                style={{ backgroundImage: `url(${Image_3})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-0" />

                {/* Animated Scroll Row */}
                <div className="relative z-10 py-10">
                    <h2 className="text-center text-white text-3xl font-bold mb-6 drop-shadow-lg">
                        Cities We're Building Together!
                    </h2>

                    <div className="flex animate-scrollRow gap-6 px-4 w-max">
                        {cityData.concat(cityData).map((city, index) => (
                            <div
                                key={index}
                                className="min-w-[200px] sm:min-w-[250px] md:min-w-[300px] bg-white bg-opacity-30 backdrop-blur-md rounded-xl p-4 shadow-lg border border-white border-opacity-20"
                            >
                                <img
                                    src={city.image}
                                    className="rounded-lg w-full h-40 object-cover mb-3"
                                    alt={city.name}
                                />
                                <h1 className="text-center text-white text-lg font-semibold">
                                    {city.name} | Pakistan
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center mt-8">
                <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition transform duration-300">
                    Explore More!
                </button>
            </div>
        </>
    );
};

export default HeroAnimation;
