// components/News/News.tsx
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './News.module.scss';
import { tabs, newsItems } from './mocks';
import { mountNewsSlider, type NewsSliderApi } from './ui/news-slider'; 

export default function News() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredNews = useMemo(
    () => (activeTab === 'all' ? newsItems : newsItems.filter((i) => i.category === activeTab)),
    [activeTab]
  );

  // refs для «движка»
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const pagRef = useRef<HTMLDivElement | null>(null);
  const apiRef = useRef<NewsSliderApi | null>(null);

  // Прокручиваем к активному табу при его изменении
  useEffect(() => {
    const activeTabElement = document.querySelector(`.${styles.news_tab}.${styles['is-active']}`);
    if (activeTabElement) {
      activeTabElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [activeTab]);

  // Инициализируем один раз, когда ref'ы готовы
  useEffect(() => {
    if (!viewportRef.current || !trackRef.current || !prevRef.current || !nextRef.current || !pagRef.current) return;

    apiRef.current = mountNewsSlider({
      viewport: viewportRef.current,
      track: trackRef.current,
      prevBtn: prevRef.current,
      nextBtn: nextRef.current,
      pagination: pagRef.current,
      // опции:
      breakpoints: { tablet: 768, desktop: 1440 },
      rowsMobile: 2,
      rowsTablet: 2,
      maxVisibleBullets: 4,
    });

    return () => apiRef.current?.destroy();
  }, []);

  // При смене таба (React перерисует карточки) — просто просим движок пересчитаться
  useEffect(() => {
    apiRef.current?.rebuild();
  }, [filteredNews.length, activeTab]);

  return (
    <section className={styles.news} id="news">
      <h2 className={styles.news_title}>Новости и материалы</h2>

      <div className={styles.news_tabs}>
        <div className={styles.news_tabs_wrapper}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.news_tab} ${activeTab === tab.id ? styles['is-active'] : ''}`}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* VIEWPORT + TRACK */}
      <div className={styles.news_slider_wrapper} ref={viewportRef}>
        <div className={styles.news_slider_track} ref={trackRef}>
          {filteredNews.map((item, index) => (
            <div key={item.id} className={`${styles.news_card} ${index === 0 ? styles.news_card_first : ''}`} data-news-card tabIndex={0} role="region" aria-label={`Новость: ${typeof item.title === 'string' ? item.title : 'News item'}`}>
              <picture>
                {item.imgTablet && <source media="(min-width: 768px)" srcSet={item.imgTablet} />}
                {item.imgDesktop && <source media="(min-width: 1440px)" srcSet={item.imgDesktop} />}
                <img className={styles.news_card_image} src={item.img} alt={typeof item.title === 'string' ? item.title : 'News item'} />
              </picture>
              <div className={styles.news_card_content}>
              <span aria-hidden="true" className={`${styles.news_angle} ${styles.news_angle_1}`} />
                <span className={styles.news_card_date}>{item.date}</span>
                <h3 className={styles.news_card_title}>{item.title}</h3>

                {/* уголок #1 - в card_content */}
               

                {/* уголок #2 - в card_content */}
                <span aria-hidden="true" className={`${styles.news_angle} ${styles.news_angle_2}`} />

                <p>
                  {typeof item.text === 'string' ? item.text : item.text}
                  <a className={styles.news_link} href="#"><span className="visually_hidden">Перейти</span></a>

                  {/* уголок #3 - внутри параграфа */}
                  <span aria-hidden="true" className={`${styles.news_angle} ${styles.news_angle_3}`} />
                </p>

                {/* уголок #4 - в card_content */}
                <span aria-hidden="true" className={`${styles.news_angle} ${styles.news_angle_4}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* КНОПКИ + ПАГИНАЦИЯ */}
      <div className={styles.news_controls}>
        <button ref={prevRef} className={styles.news_arrow_prev} type="button" aria-label="Назад" tabIndex={-1} />
        {/* добавил класс для глобальных стилей пуль */}
        <div ref={pagRef} className={`${styles.news_pagination} news_custom-pagination`} />
        <button ref={nextRef} className={styles.news_arrow_next} type="button" aria-label="Вперёд" tabIndex={-1} />
      </div>
    </section>
  );
}
