import React from 'react'
import { FaClock } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const Carousel = () => {
    return (
        <div>
            <div className="w-full">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    loop={true}
                    autoplay={{
                        delay: 35000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="w-full h-[500px] sm:h-[400px] pl-5 flex flex-col justify-center bg-spiderman bg-cover bg-no-repeat">
                            <div className="w-full sm:w-3/4 p-10 flex flex-col justify-center items-start gap-y-3 sm:gap-y-6">
                                <div className="text-[#fff] font-bold text-4xl">
                                    Spider-Man: Across the Spider-Verse
                                </div>
                                <div className="text-[#fff] flex gap-4">
                                    <div className="flex justify-center items-center gap-1">
                                        <span><FaClock className='text-[15px]' /></span>
                                        <span>2h 20min</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-1">
                                        <span>Family/Action</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-1">
                                        <span>2023</span>
                                    </div>
                                </div>
                                <div className="">
                                    <button className="flex items-center px-4 py-2 bg-[#009846] text-[#FFFFFF] rounded-full text-lg">
                                        Watch Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-[500px] sm:h-[400px] pl-5 flex flex-col justify-center bg-spiderman bg-cover bg-no-repeat">
                            <div className="w-full sm:w-3/4 p-10 flex flex-col justify-center items-start gap-y-3 sm:gap-y-6">
                                <div className="text-[#fff] font-bold text-4xl">
                                    Spider-Man: Across the Spider-Verse
                                </div>
                                <div className="text-[#fff] flex gap-4">
                                    <div className="flex justify-center items-center gap-1">
                                        <span><FaClock className='text-[15px]' /></span>
                                        <span>2h 20min</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-1">
                                        <span>Family/Action</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-1">
                                        <span>2023</span>
                                    </div>
                                </div>
                                <div className="">
                                    <button className="flex items-center px-4 py-2 bg-[#009846] text-[#FFFFFF] rounded-full text-lg">
                                        Watch Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-[500px] sm:h-[400px] pl-5 flex flex-col justify-center bg-spiderman bg-cover bg-no-repeat">
                            <div className="w-full sm:w-3/4 p-10 flex flex-col justify-center items-start gap-y-3 sm:gap-y-6">
                                <div className="text-[#fff] font-bold text-4xl">
                                    Spider-Man: Across the Spider-Verse
                                </div>
                                <div className="text-[#fff] flex gap-4">
                                    <div className="flex justify-center items-center gap-1">
                                        <span><FaClock className='text-[15px]' /></span>
                                        <span>2h 20min</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-1">
                                        <span>Family/Action</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-1">
                                        <span>2023</span>
                                    </div>
                                </div>
                                <div className="">
                                    <button className="flex items-center px-4 py-2 bg-[#009846] text-[#FFFFFF] rounded-full text-lg">
                                        Watch Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    )
}

export default Carousel