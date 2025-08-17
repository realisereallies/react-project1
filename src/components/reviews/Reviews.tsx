import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import styles from './Reviews.module.scss';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { ReviewCard } from '../../ui/ReviewCard';
import { reviewsItems } from './mocks';


const Reviews = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const navigationContainerRef = useRef<HTMLDivElement | null>(null);
  const scrollbarContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveNavigation = () => {
      if (!navigationContainerRef.current || !scrollbarContainerRef.current) return;
      
      const isTabletOrHigher = window.innerWidth >= 768;
      
      if (isTabletOrHigher) {
        // Перемещаем навигацию в контейнер скроллбара
        scrollbarContainerRef.current.appendChild(navigationContainerRef.current);
             } else {
         // Возвращаем навигацию в хедер
         const header = document.querySelector('[data-test="reviews"] .reviews__header');
         if (header) {
           header.appendChild(navigationContainerRef.current);
         }
       }
    };

    // Выполняем при загрузке с небольшой задержкой для корректной работы с DOM
    setTimeout(moveNavigation, 0);
    
    // Выполняем при изменении размера окна
    window.addEventListener('resize', moveNavigation);
    
    return () => {
      window.removeEventListener('resize', moveNavigation);
    };
  }, []);

  return (
    <section className={styles.reviews} data-test="reviews" id="reviews">
      <div className={styles.reviews__header}>
        <SectionTitle text="Отзывы" className={styles.reviews__title} />
        <div 
          ref={navigationContainerRef}
          className={`${styles.reviews__navigation_container} ${styles.reviews__navigation_header}`}
        >
          <button
            className={`${styles.reviews__button_prev}`}
            type="button"
            aria-label="Назад"
            ref={prevRef}
          ></button>
          <button
            className={`${styles.reviews__button_next}`}
            type="button"
            aria-label="Вперёд"
            ref={nextRef}
          ></button>
        </div>
      </div>

      <div className={`reviews__slider swiper`}>
       <Swiper
  modules={[Navigation, Scrollbar]}
  onBeforeInit={(swiper) => {
    if (swiper.params.navigation && typeof swiper.params.navigation === 'object') {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
    }
    swiper.navigation.init();
    swiper.navigation.update();
  }}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  scrollbar={{ 
    el: '.reviews__scrollbar', 
    draggable: true,
    dragSize: 327
  }}
  onBreakpoint={(swiper) => {
    const size = window.innerWidth >= 1440 ? 390 : 327;
    const scrollbarParams = swiper.params.scrollbar;
    if (scrollbarParams && typeof scrollbarParams === 'object') {
      scrollbarParams.dragSize = size;
      swiper.scrollbar.updateSize();
    }
  }}
  spaceBetween={44}
  slidesPerView={1}
  slidesPerGroup={1}
  breakpoints={{
    768: { slidesPerView: 1.3, slidesPerGroup: 1 },
    1024: { slidesPerView: 1.4, slidesPerGroup: 1 },
    1440: { slidesPerView: 2, spaceBetween: 13, slidesPerGroup: 1, centeredSlides: false},
  }}
>
          {reviewsItems.map((review) => (
            <SwiperSlide key={review.id} className="swiper-slide reviews__slide">
              <ReviewCard
                name={review.name}
                program={review.program}
                date={review.date}
                quote={review.quote}
                text={review.text}
                image={review.image}
                className={styles.reviews__card}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div 
          ref={scrollbarContainerRef}
          className={styles.reviews__scrollbar_container}
        >
          <div className={styles.reviews__scrollbar_wrapper}>
            <div className="swiper-scrollbar reviews__scrollbar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
