'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import "swiper/swiper.min.css";

import Link from "next/link"
import Image from "next/image"

function Post() {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Image
         
                className="rounded-t-lg border rounded-lg"
                src={"/women.jpg"}
                alt="women design"
                width={400}
                height={100}
            />
            <div className="p-5">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <Link
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />

                    </svg>
                </Link>
            </div>
        </div>
    );
}


const Third_section = () => {
    SwiperCore.use([Autoplay]);
    return (
        <section className="container mx-auto  justify-center items-center md:px-20 py-10">
            <h1 className="font-serif text-4xl text-center pb-10">Most popular Trend</h1>
            {/*grid column*/}
            <div className='my-4 lg:ml-14 pb-16'> <Swiper slidesPerView={2} autoplay={{ delay: 2000 }} >



<SwiperSlide>
    <Post />
</SwiperSlide>

<SwiperSlide>
    <Post />
</SwiperSlide>
<SwiperSlide>
    <Post />
</SwiperSlide>

<SwiperSlide>
    <Post />
</SwiperSlide>

<SwiperSlide>
    <Post />
</SwiperSlide>

</Swiper>
</div>
           
        </section>
    )
}

export default Third_section;
