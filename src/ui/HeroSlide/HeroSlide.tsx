import styles from './HeroSlide.module.scss';
import { MainLink } from '../MainLink/MainLink';
import React from 'react';

interface HeroSlideProps {
  image: {
    desktop: string;
    desktopWebp: string;
    tablet: string;
    tabletWebp: string;
    mobile: string;
    mobileWebp: string;
  };
  alt: string;
  title: React.ReactNode;
  text: React.ReactNode;
  buttonText?: string;
  buttonLink?: string;
  slideIndex: number;
  totalSlides: number;
  onSlideChange?: (index: number) => void;
}

const HeroSlide = ({ 
  image, 
  alt, 
  title, 
  text, 
  buttonText = "Подробнее", 
  buttonLink = "#",
  slideIndex,
  totalSlides,
  onSlideChange
}: HeroSlideProps) => {
  return (
    <div className={styles.heroSlide} tabIndex={0} role="region" aria-label={`Слайд ${slideIndex + 1} из ${totalSlides}`}>
      <div className={styles.heroSlide__img}>
        <picture>
          {/* Desktop WebP */}
          <source
            media="(min-width: 1440px)"
            srcSet={`${image.desktopWebp} 1x, ${image.desktopWebp.replace('@1x', '@2x')} 2x`}
            type="image/webp"
          />
          {/* Desktop JPEG fallback */}
          <source
            media="(min-width: 1440px)"
            srcSet={`${image.desktop} 1x, ${image.desktop.replace('@1x', '@2x')} 2x`}
            type="image/jpeg"
          />
          {/* Tablet WebP */}
          <source
            media="(min-width: 768px)"
            srcSet={`${image.tabletWebp} 1x, ${image.tabletWebp.replace('@1x', '@2x')} 2x`}
            type="image/webp"
          />
          {/* Tablet JPEG fallback */}
          <source
            media="(min-width: 768px)"
            srcSet={`${image.tablet} 1x, ${image.tablet.replace('@1x', '@2x')} 2x`}
            type="image/jpeg"
          />
          {/* Mobile WebP */}
          <source
            srcSet={`${image.mobileWebp} 1x, ${image.mobileWebp.replace('@1x', '@2x')} 2x`}
            type="image/webp"
          />
          {/* Mobile JPEG fallback */}
          <img src={image.mobile} alt={alt} />
        </picture>
      </div>

      <div className={styles.heroSlide__card}>
        {/* Пагинация внутри карточки */}
        <div className={`${styles.hero__pagination} swiper-pagination`}>
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`swiper-pagination-bullet ${index === slideIndex ? 'swiper-pagination-bullet-active' : ''}`}
              aria-label={`Перейти к слайду ${index + 1}`}
              onClick={() => onSlideChange?.(index)}
              tabIndex={-1}
            />
          ))}
        </div>

        {/* Уголок №1 — после пагинации и до заголовка */}
        <span
          className={`${styles.heroSlide__angle} ${styles.heroSlide__angle_1}`}
          aria-hidden="true"
        />

        <h2 className={styles.heroSlide__title}>
          {title}
        </h2>
        <div className={styles.heroSlide__card_inner}>
          {/* Уголок №2 */}
          <span
            className={`${styles.heroSlide__angle} ${styles.heroSlide__angle_2}`}
            aria-hidden="true"
          />
          <p className={styles.heroSlide__text}>
            {text}
            {/* Уголок №3 */}
            <span
              className={`${styles.heroSlide__angle} ${styles.heroSlide__angle_3}`}
              aria-hidden="true"
            />
          </p>
          <div className={styles.heroSlide__button_wrapper}>
            <MainLink
              href={buttonLink}
              text={buttonText}
              iconType="arrow"
              className={styles.heroSlide__button}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide; 