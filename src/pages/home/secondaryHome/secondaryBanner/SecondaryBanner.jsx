
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import "./SecondaryBanner.css"

import ac from "../../../../assets/secondary-banner/ac.png";
import tv from "../../../../assets/secondary-banner/tv.png";
import kitchen from "../../../../assets/secondary-banner/kitchen.png";
import laptop from "../../../../assets/secondary-banner/laptop.png";
import phone from "../../../../assets/secondary-banner/phone.png";
import refrigerator from "../../../../assets/secondary-banner/refrigerator.png";
import { Link } from 'react-router-dom';

const SecondaryBanner=()=> {

  return (
    <>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={5}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Link to="/phone"><img src={phone} alt=''/></Link></SwiperSlide>
        <SwiperSlide><Link to="/laptop"><img src={laptop} alt=''/></Link></SwiperSlide>
        <SwiperSlide><Link to="/ac"><img src={ac} alt=''/></Link></SwiperSlide>
        <SwiperSlide><Link to="/tv"><img src={tv} alt=''/></Link></SwiperSlide>
        <SwiperSlide><Link to="/kitchen"><img src={kitchen} alt=''/></Link></SwiperSlide>
        <SwiperSlide><Link to="/refrigerator"><img src={refrigerator} alt=''/></Link></SwiperSlide>
      </Swiper>
    </>
  );
}

export default SecondaryBanner
