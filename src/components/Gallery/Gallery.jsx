import css from "./Gallery.module.css";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img1 from "../../images/domki-przód.png";
import img2 from "../../images/domki-tył.jpg";
import img3 from "../../images/plac-zabaw1.jpg";
import img4 from "../../images/plac-zabaw2.jpg";
import img5 from "../../images/domki-tył2.jpg";
import img6 from "../../images/salon.jpg";
import img7 from "../../images/kuchnia.jpg";
import img8 from "../../images/łazienka.jpg";
import img9 from "../../images/pokój1.jpg";
import img10 from "../../images/pokój2.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={`${css.gallery}`}>
      <div id="Gallery" className={css.navLink}></div>
      <h2 className={css.galleryHead}>Galeria</h2>
      <div className={css.swipers}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          grabCursor={true}
          className={css.swiper}
        >
          {images.map((item, index) => (
            <SwiperSlide className={css.swiperSlide} key={index}>
              <img src={item} alt="zdjęcie" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={`${css.swiperThumbs} swiper-thumbs`}
        >
          {images.map((item, index) => (
            <SwiperSlide className={css.swiperSlide} key={index}>
              <div className={css.swiperThumbsWrapper}>
                <img src={item} alt="zdjęcie" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
