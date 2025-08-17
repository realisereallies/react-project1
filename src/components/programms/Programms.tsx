import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import styles from './Programms.module.scss';
import { programsData } from './mocks';
import { MainLink } from '../../ui/MainLink/MainLink';
import { ProgrammSlide } from '../../ui/ProgrammSlide';

export default function Programs() {
  const swiperRef   = useRef<HTMLDivElement | null>(null);

  const headerRef   = useRef<HTMLDivElement | null>(null); // хедер секции
  const bottomRef   = useRef<HTMLDivElement | null>(null); // низ секции

  const controlsRef = useRef<HTMLDivElement | null>(null); // ОБЩИЙ контейнер: обёртка скроллбара + стрелки
  const scrollbarRef= useRef<HTMLDivElement | null>(null); // сам .swiper-scrollbar внутри обёртки
  const prevBtnRef  = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef  = useRef<HTMLButtonElement | null>(null);

  const btnRef      = useRef<HTMLDivElement | null>(null); // контейнер кнопки

  useEffect(() => {
    if (!swiperRef.current || !prevBtnRef.current || !nextBtnRef.current || !scrollbarRef.current) return;

    const swiper = new Swiper(swiperRef.current, {
      modules: [Navigation, Scrollbar],
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        prevEl: prevBtnRef.current!,
        nextEl: nextBtnRef.current!,
      },
      scrollbar: {
        el: scrollbarRef.current!, // <- передаём элемент
        draggable: true,
        dragSize: 327,
      },
      breakpoints: {
        768:  { slidesPerView: 2.1, spaceBetween: 20 },
        1024: { slidesPerView: 3, allowTouchMove: false, spaceBetween: 31 },
      },
    });

    const syncDisabled = () => {
      // На планшете и мобильном проверяем, есть ли еще слайды для показа
      const isAtEnd = swiper.isEnd || swiper.activeIndex >= swiper.slides.length - 1;
      const isAtBeginning = swiper.isBeginning;
      
      prevBtnRef.current?.classList.toggle('swiper-button-disabled', isAtBeginning);
      nextBtnRef.current?.classList.toggle('swiper-button-disabled', isAtEnd);
    };

    const mq = window.matchMedia('(min-width: 768px)');
    
    // функция выбора размера бегунка
    const applyDragSize = () => {
      const size = window.innerWidth >= 1440 ? 395 : 327;
      const scrollbarParams = swiper.params.scrollbar;
      if (scrollbarParams && typeof scrollbarParams === 'object') {
        scrollbarParams.dragSize = size;
        swiper.scrollbar.updateSize();
      }
    };
    
    const move = () => {
      if (!headerRef.current || !bottomRef.current || !controlsRef.current || !btnRef.current) return;

      if (mq.matches) {
        // >=768: controls вниз, кнопку в хедер
        bottomRef.current.appendChild(controlsRef.current);
        headerRef.current.appendChild(btnRef.current);
      } else {
        // <768: controls в хедер, кнопку вниз
        headerRef.current.appendChild(controlsRef.current);
        bottomRef.current.appendChild(btnRef.current);
      }

      swiper.update();
      swiper.navigation.update();
      swiper.scrollbar.updateSize();
      applyDragSize();
      syncDisabled();
    };

    swiper.on('afterInit', syncDisabled);
    swiper.on('slideChange', syncDisabled);
    swiper.on('resize', syncDisabled);

    // сразу применили и подписались
    applyDragSize();
    swiper.on('resize', applyDragSize);
    
    move();
    mq.addEventListener('change', move);
    return () => {
      mq.removeEventListener('change', move);
      swiper.off('afterInit', syncDisabled);
      swiper.off('slideChange', syncDisabled);
      swiper.off('resize', syncDisabled);
      swiper.off('resize', applyDragSize);
    };
  }, []);

  return (
    <section className={styles.programs} data-test="programs" id="programs">
      <div className={styles.programs__header} ref={headerRef}>
        <h2 className={styles.programs__title}>Программы</h2>

        {/* общий контейнер: ОБЁРТКА скроллбара + стрелки */}
        <div ref={controlsRef} className={styles.programs__controls}>
          <div className={styles.programs__scrollbarWrap}>
            <div ref={scrollbarRef} className="swiper-scrollbar" />
          </div>
          <div className={styles.programs__nav}>
            <button ref={prevBtnRef} className={styles.programs__button_prev} aria-label="Назад" tabIndex={-1} />
            <button ref={nextBtnRef} className={styles.programs__button_next} aria-label="Вперёд" tabIndex={-1} />
          </div>
        </div>

        {/* кнопка */}
        <div ref={btnRef}>
          <MainLink className={`${styles.programs__button} main-button`} href="#" text="Все программы" />
        </div>
      </div>

      <div className={`${styles.programs__slider} swiper`} ref={swiperRef}>
        <div className="swiper-wrapper">
          {programsData.map((p) => <ProgrammSlide key={p.id} {...p} />)}
        </div>
      </div>

      {/* сюда переезжают controls ИЛИ кнопка */}
      <div ref={bottomRef} />
    </section>
  );
}
