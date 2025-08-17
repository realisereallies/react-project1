import React from 'react';
import styles from './ProgrammSlide.module.scss';

interface ProgramSource {
  media?: string;
  type: string;
  srcSet: string;
  width: string;
  height: string;
}

interface ProgramImage {
  src: string;
  srcSet: string;
  alt: string;
  width: string;
  height: string;
}

interface ProgrammSlideProps {
  id: string;
  title: string;
  description: React.ReactNode;
  sources: ProgramSource[];
  img: ProgramImage;
}

export const ProgrammSlide = ({ id, title, description, sources, img }: ProgrammSlideProps) => {
  return (
    <div className="swiper-slide" key={id} id={id} tabIndex={0} role="region" aria-label={`Программа: ${title}`}>
      <div className={styles.programmSlide__card}>
        <picture>
          {sources.map((source, idx) => (
            <source key={idx} {...source} />
          ))}
          <img className={styles.programmSlide__card_img} {...img} alt={img.alt} />
        </picture>

        <div className={styles.programmSlide__card_overlay}></div>
        <div className={styles.programmSlide__card_content}>
          <h3 className={styles.programmSlide__card_title}>
            {title}
            {/* Уголок: привязан к заголовку */}
            <span
              className={`${styles.programmSlide__angle} ${styles.programmSlide__angle_1}`}
              aria-hidden="true"
            />
          </h3>
          
          <p>
            {description}
            <a className={styles.programmSlide__card_link} href="#" aria-label={`Подробнее о программе "${title}"`}>
              <span className="visually_hidden">посмотреть страницу</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}; 