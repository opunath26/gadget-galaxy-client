"use client";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
    const slides = [
        {
            id: 1,
            title: "Step into the Future with Gadget Galaxy",
            desc: "Discover the latest tech innovations and premium gadgets. From smartphones to smart homes.",
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070",
        },
        {
            id: 2,
            title: "Next-Gen Audio Experience",
            desc: "Immerse yourself in crystal clear sound with our premium wireless headphones and speakers.",
            img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070",
        },
        {
            id: 3,
            title: "Smart Living, Better Life",
            desc: "Automate your world with the most advanced smart home devices in the market.",
            img: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070",
        },
        {
            id: 4,
            title: "Ultra-Thin Premium Laptops",
            desc: "Power meets portability. Upgrade to the latest high-performance laptops today.",
            img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2070",
        }
    ];

    return (
        <section className="relative mx-auto my-6 rounded-3xl w-full max-w-[1400px] h-[70vh] min-h-[500px] overflow-hidden">
            <Swiper
                spaceBetween={0}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative flex justify-center items-center w-full h-full">
                            {/* Background Image with Overlay */}
                            <div className="z-0 absolute inset-0">
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="z-10 relative px-6 md:px-12 max-w-4xl text-white text-center">
                                <h1 className="mb-6 font-bold text-4xl md:text-6xl leading-tight tracking-tight">
                                    {slide.title.includes("Gadget Galaxy") ? (
                                        <>Step into the Future with <br/> <span className="text-sky-400">Gadget Galaxy</span></>
                                    ) : slide.title}
                                </h1>
                                <p className="mx-auto mb-8 max-w-2xl text-gray-200 text-lg md:text-xl">
                                    {slide.desc}
                                </p>
                                <div className="flex justify-center gap-4">
                                    <Link href="/items" className="bg-sky-600 hover:bg-sky-700 shadow-lg px-8 py-3 rounded-full font-bold text-white transition">
                                        Shop Now
                                    </Link>
                                    <Link href="/about" className="hover:bg-white backdrop-blur-md px-8 py-3 border-2 border-white rounded-full font-bold text-white hover:text-blue-900 transition">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom CSS for Swiper Dots and Arrows */}
            <style jsx global>{`
                .swiper-button-next, .swiper-button-prev {
                    color: white !important;
                    transform: scale(0.6);
                }
                .swiper-pagination-bullet-active {
                    background: #38bdf8 !important;
                }
            `}</style>
        </section>
    );
};

export default Hero;