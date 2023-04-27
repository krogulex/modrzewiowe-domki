import Slide1 from "../../images/domki-przód.png";
import Slide2 from "../../images/domki-tył.jpg";
import Slide3 from "../../images/plac-zabaw1.jpg";

import css from "./Slider.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination} from "swiper";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className={css.swiper}
      >
        <SwiperSlide className={css.swiperSlide}>
          <img src={Slide1} alt="zdjęcie" />
        </SwiperSlide>
        <SwiperSlide className={css.swiperSlide}>
          <img src={Slide2} alt="zdjęcie" />
        </SwiperSlide>
        <SwiperSlide className={css.swiperSlide}>
          <img src={Slide3} alt="zdjęcie" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
