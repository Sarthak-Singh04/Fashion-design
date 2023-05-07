'use client';

import { Pagination, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{Autoplay}  from 'swiper';

import Image from "next/image";
import Link from "next/link";
import Author_profile from "./child/Author_profile";


import "swiper/swiper.min.css";



const First_section = () => {

  
SwiperCore.use([Autoplay]);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-4xl pb-14 text-center">Trending</h1>
        
        <Swiper slidesPerView={1} autoplay={{ delay: 2000 }} className="pb-20">
       
        
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
            
            <SwiperSlide>
              <Slide />
            </SwiperSlide>

            
            <SwiperSlide>
              <Slide />
            </SwiperSlide>

            
            <SwiperSlide>
              <Slide />
            </SwiperSlide>

            
            <SwiperSlide>
              <Slide />
            </SwiperSlide>
          
        </Swiper>
    
     
      </div>
    </div>
  );
};

function Slide() {
  return (
    <div className="grid md:grid-cols-2 gap-16">
      <div className="image">
        <Link href={"/"}>
          <div className="relative h-80 md:pl-40">
            <Image
              src={"/men.jpg"}
              alt="Men's fashion"
              width={300}
              height={400}
              className="border rounded-xl"
            />
          </div>
        </Link>
      </div>
      <div className="info flex justify-center flex-col" >
        <div className="ca ">
          <Link href={"/"}>
            <div className="text-orange-600 hover:text-orange-800">
              Business Travel
            </div>
          </Link>
          <Link href={"/"}>
            <div className="text-gray-600 hover:text-gray-800">July 3, 2022</div>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <p className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-800 hover:text-gray-600">
              Your happiness comes from others' efforts
            </p>
          </Link>
          <p className="mt-4 text-gray-600">
            Upon a i wandering one flown, then of never the he heard now. Then
            nothing guessing raven the sculptured is whom. Shall the within
            clasp burned the. Bust is and.
          </p>
          <Author_profile></Author_profile>
        </div>
      </div>
    </div>
  );
}

export default First_section;
