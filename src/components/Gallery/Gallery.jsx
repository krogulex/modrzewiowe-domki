import css from "./Gallery.module.css";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.png";
import img6 from "../../images/6.png";
import img7 from "../../images/7.jpg";
import img8 from "../../images/8.jpg";


import img12 from "../../images/plac zabaw.jpg";
import img13 from "../../images/kuchnia.jpg";
import img14 from "../../images/leżaki.jpg";
import img15 from "../../images/140.jpg";
import img16 from "../../images/kuchnia.jpg";
import img17 from "../../images/łóżka.jpg"
import img18 from "../../images/jadalnia.jpg"
import img19 from "../../images/plac zabaw 2.jpg";
import img20 from "../../images/plac zabaw 3.jpg"
import img21 from "../../images/jadalnia.jpg"
import img22 from "../../images/143.jpg"



const images = [
  { src: img1, alt: "domki-przód" },
  { src: img2, alt: "domki-tył" },
    { src: img3, alt: "plac zabaw" },
      { src: img4, alt: "plac zabaw" },
    { src: img5, alt: "plac-zabaw" },
       { src: img6, alt: "plac-zabaw" },
  { src: img7, alt: "jadalnia" },
    { src: img8, alt: "jadalnia" },
];

const Gallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={`${css.gallery}`}>
      <div id="Gallery" className="div-nav"></div>
      <h3 className={css.galleryHead}>Galeria</h3>
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
              <img src={item.src} alt={item.alt} loading="lazy" />
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
                <img src={item.src} alt={item.alt} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;
