import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef } from "react";
import type { SwiperRef } from "swiper/react";
import styles from "./Hero.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import HeroSlide from "../../ui/HeroSlide/HeroSlide";
import { heroSlidesData } from "./mocks";

const Hero = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const handleSlideChange = (index: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };
  return (
    <section className={styles.hero} data-test="hero">
      <Swiper
        ref={swiperRef}
        modules={[Pagination]}
        loop={false}
        className={styles.hero__container}
      >
        {heroSlidesData.map((slide, index) => (
          <SwiperSlide key={slide.id} className={styles.hero__slide}>
            <HeroSlide
              image={slide.image}
              alt={slide.alt}
              title={slide.title}
              text={slide.text}
              slideIndex={index}
              totalSlides={heroSlidesData.length}
              onSlideChange={handleSlideChange}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
