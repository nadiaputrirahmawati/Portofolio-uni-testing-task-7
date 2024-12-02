import React, { useState } from "react";
import sepatu from '../assets/sepatu.png';
import note from '../assets/note.png';
import klinik from '../assets/klinik.png';
import silades from '../assets/silades.png';
import react from '../assets/react.png';
import laravel from '../assets/laravel.png';
import { FaLink } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

interface PortfolioItem {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
    url: string;
}

const Portfolio: React.FC = () => {
    const [filter, setFilter] = useState<string>("All");

    const portfolioItems: PortfolioItem[] = [
        {
            id: 1,
            category: "React",
            title: "Aplikasi Absensi Semeniar",
            description: "Aplikasi Absensi Semeniar",
            image: react,
            url: "https://nadp.my.id/",
        },
        {
            id: 2,
            category: "Web - PHP",
            description: "Notes Web",
            title: "Aplikasi web untuk catatan",
            image: note,
            url: 'https://note.nadp.my.id/'
        },
        {
            id: 3,
            category: "Web - PHP",
            description: "Silades",
            title: "Aplikasi Layanan Desa",
            image: silades,
            url: 'https://medical.nadp.my.id/'
        },
        {
            id: 7,
            category: "Web - PHP",
            description: "Piccaple Store",
            title: "Aplikasi E-Commerce",
            image: sepatu,
            url: 'https://picapple.nadp.my.id/'
        },
        {
            id: 4,
            category: "Web - PHP",
            description: "Klinik",
            title: "Aplikasi Management Klinik",
            image: klinik,
            url: 'https://medical.nadp.my.id/'
        },
        {
            id: 5,
            category: "Laravel",
            description: "Blogs",
            title: "Aplikasi Blogs ",
            image: laravel,
            url: 'https://nadp.my.id/'
        },
    ];

    const filteredItems = filter === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);

    return (
        <section id="portfolio" className="h-full bg-primary">
            <div className="container mx-auto px-4 py-8">
                <h1 className='text-center mb-10 font-bold text-4xl text-sky-800 ' style={{ fontFamily: "Rampart One" }}> My - Portfolio</h1>
                <div className="flex justify-center space-x-4 mb-6">
                    {["All", "React", "Web - PHP", "Laravel"].map((category) => (
                        <button
                            key={category}
                            className={`px-2 py-2 rounded-full w-auto lg:w-32  ${filter === category
                                ? "bg-blue-400 text-white"
                                : "bg-slate-100 border-secondary border-2 text-gray-700"
                                } hover:bg-secondary`}
                            onClick={() => setFilter(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative group bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* Gambar */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-auto object-cover"
                            />

                            <div className="group-hover:opacity-100 absolute inset-0 mt-24 gap-4 ml-6 mr-6 bg-white bg-opacity-95 flex  p-4 opacity-0 h-20 transition-opacity duration-300">
                                <h2 className="text-xl font-bold mb-2 text-slate-600 w-60">{item.title}</h2>
                                <a href="https://www.nadp.my.id/" className="text-black"><FaPlus size={22} /></a>
                                <a href={item.url} className="text-black"><FaLink size={22} /></a>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>

    );
};

export default Portfolio;
