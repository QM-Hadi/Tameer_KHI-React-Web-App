import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Labour Images
import Labour01 from '../component/Images/Zafar ALi Malla_01.jpg';
import Labour02 from '../component/Images/Mansoor ALi  Meerbhur_02.jpg';
import Labour03 from '../component/Images/Waseem Akram Malla_03.jpg';
import Labour04 from '../component/Images/Aftab Ali Malla_04.jpg';
import Labour05 from '../component/Images/Asad Ali_05.jpg';
import Labour06 from '../component/Images/Ghulam Sarwar_06.jpg';
import Labour07 from '../component/Images/Meer Ali_07.jpg';

const AnimationCon = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const labours = [
        { img: Labour01, name: 'Zafar Ali Malla', area: 'Hyderabad' },
        { img: Labour02, name: 'Mansoor Ali Meerbhur', area: 'Sukkur' },
        { img: Labour03, name: 'Waseem Akram Malla', area: 'Karachi' },
        { img: Labour04, name: 'Aftab Ali Malla', area: 'Larkana' },
        { img: Labour05, name: 'Asad Ali', area: 'Nawabshah' },
        { img: Labour06, name: 'Ghulam Sarwar', area: 'Mirpurkhas' },
        { img: Labour07, name: 'Meer Ali', area: 'Dadu' }
    ];

    return (
        <div className="relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm z-0"
                style={{ backgroundImage: `url(${Labour01})` }}
            ></div>

            {/* Overlay Content */}
            <div className="relative z-10 px-6 py-14">
                <h1
                    className="text-5xl text-center mb-16 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
                    data-aos="fade-down"
                >
                    Our Labours!
                </h1>

                {/* Labour Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {labours.map((labour, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in-up"
                            className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 bg-white bg-opacity-90 border border-gray-300"
                        >
                            <div className="bg-white p-4">
                                <img
                                    src={labour.img}
                                    alt={labour.name}
                                    className="w-full h-72 object-contain"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h3 className="text-xl font-semibold text-gray-800">{labour.name}</h3>
                                <p className="text-sm text-gray-500">{labour.area}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnimationCon;
