import css from "./Gallery.module.css";

import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import img1 from "../../images/domki-przód.jpg";
import img2 from "../../images/domki-tył.jpg";
import img3 from "../../images/plac-zabaw.jpg";
import img4 from "../../images/plac-zabaw-2.jpg";
import img5 from "../../images/domki-tył-2.jpg";
import img6 from "../../images/salon.jpg";
import img7 from "../../images/kuchnia.jpg";
import img8 from "../../images/łazienka.jpg";
import img9 from "../../images/pokój-1.jpg";
import img10 from "../../images/pokój-2.jpg";
import img11 from "../../images/przód z drzewem.jpg"

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
 // { src: img11, alt: "domki przód z drzewem" },
 // { src: img15, alt: "tył" },
  { src: img2, alt: "domki-tył" },
    { src: img19, alt: "plac zabaw" },
      { src: img20, alt: "plac zabaw" },
    { src: img12, alt: "plac-zabaw" },
       { src: img22, alt: "plac-zabaw" },
  //{ src: img3, alt: "plac-zabaw" },
  //{ src: img4, alt: "plac-zabaw" },
  { src: img18, alt: "jadalnia" },
    { src: img13, alt: "jadalnia" },
  // { src: img14, alt: "leżaki" },
  //{ src: img5, alt: "domki-tył" },
 // { src: img6, alt: "łazienka" },,
  { src: img8, alt: "kuchnia" },
 // { src: img9, alt: "pokój-1" },
  { src: img17, alt: "łóżka" },
 // { src: img10, alt: "pokój-2" },
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
