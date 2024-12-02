import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import html from '../assets/1.png';
import css from '../assets/2.png';
import sql from '../assets/3.png';
import php from '../assets/4.png';
import js from '../assets/5.png';
import react from '../assets/6.png';
import laravel from '../assets/7.png';
import 'swiper/css';
import 'swiper/css/navigation';

// Menggunakan string untuk gambar dan ReactNode untuk komponen ikon
interface Image {
    id: number;
    title: string;
    icons: string;
}

const ImageSlider: React.FC = () => {
    const images: Image[] = [
        { id: 1, title: 'HTML adalah bahasa markup', icons: html },
        { id: 2, title: 'CSS adalah bahasa styling', icons: css },
        { id: 3, title: 'SQL untuk database', icons: sql },
        { id: 4, title: 'PHP untuk server-side', icons: php },
        { id: 5, title: 'JavaScript bahasa pemrograman', icons: js },
        { id: 6, title: 'React library untuk frontend', icons: react },
        { id: 7, title: 'Laravel framework PHP', icons: laravel },
    ];

    return (
        <div className="bg-slate-100">
            <div className="relative w-full py-4 lg:py-10 md:px-16 lg:px-32">
                <h1 className='text-center mb-10 font-bold text-4xl text-sky-800 ' style={{ fontFamily: "Rampart One" }}> My - Skill</h1>
                <div className="w-full mx-auto relative">
                    <button
                        className="custom-prev-button hidden md:flex absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/70 p-2 lg:p-4 rounded-full transition-all duration-300"
                        aria-label="Previous slide"
                    >
                        {/* Add your icon for prev button */}
                    </button>
                    <button
                        className="custom-next-button hidden md:flex absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/70 p-2 lg:p-4 rounded-full transition-all duration-300"
                        aria-label="Next slide"
                    >
                        {/* Add your icon for next button */}
                    </button>

                    {/* Swiper */}
                    <Swiper
                        slidesPerView={1} // Show only one slide on mobile by default
                        centeredSlides={true} // Center the slides
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            nextEl: '.custom-next-button',
                            prevEl: '.custom-prev-button',
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1, // On mobile, show one slide
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 'auto',
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5, // On larger screens, show 5 slides
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Navigation, Autoplay]}
                        className="w-full"
                    >
                        {images.map((image) => (
                            <SwiperSlide key={image.id} className="w-full flex justify-center lg:ml-0 ml-3">
                                <div className="bg-secondary rounded-t-full  text-center w-60 mb-4 lg:w-48 shadow-xl">
                                    <div className="flex justify-center items-center mb-4">
                                        <img src={image.icons} className="w-16 h-16 object-contain mt-10" />
                                    </div>
                                    <h1 className="p-4 text-black">{image.title}</h1>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>

    );
};

export default ImageSlider;
