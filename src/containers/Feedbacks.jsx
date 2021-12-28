import * as React from 'react';
import CardFeed from '@components/CardFeed';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation} from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import '@styles/feedbacks.scss';

const Feedbacks = () => {

    return (
        <section id="feedbacks" className="feedbacks">
            <h4 className="feedbacks__title feedbacks__title--main">We really care about what you have to say!</h4>
            <Swiper
            modules={[ Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            tag="div"
            navigation
            pagination={{ clickable: true }} 
            className="feedbacks__swiper"
            id="feedbacks__swiper"
              >
      <SwiperSlide><CardFeed /></SwiperSlide>
      <SwiperSlide><CardFeed /></SwiperSlide>
      <SwiperSlide><CardFeed /></SwiperSlide>
      <SwiperSlide><CardFeed /></SwiperSlide>
    </Swiper>
            <h4 className="feedbacks__title">every opinion we receive help us a lot</h4>
            </section>
    )
}

export default Feedbacks
