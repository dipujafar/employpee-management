import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import appDev from '../../assets/services/AppDev.jpg'
import webDev from '../../assets/services/webdevelopment.jpg'
import graphicDeg from '../../assets/services/ghapicDesign.jpg'
import desktopDev from '../../assets/services/desktop.jpg'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomeBanner = () => {
    return (
        <div className='max-h-32'>
              <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={webDev} alt=""  className='w-full max-h-[500px] '/></SwiperSlide>
        <SwiperSlide><img src={appDev} alt="" className='w-full max-h-[500px]'/></SwiperSlide>
        <SwiperSlide><img src={desktopDev} alt="" className='w-full max-h-[500px]'/></SwiperSlide>
        <SwiperSlide><img src={graphicDeg} alt="" className='w-full max-h-[500px]'/></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default HomeBanner;