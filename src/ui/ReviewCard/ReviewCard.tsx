import styles from './ReviewCard.module.scss';

interface ReviewCardProps {
  name: string | React.ReactElement;
  program: string;
  date: string;
  quote: string | React.ReactElement;
  text: string | React.ReactElement;
  image: {
    webp: {
      srcSet: string;
      width: string;
      height: string;
    };
    jpg: {
      src: string;
      srcSet: string;
      width: string;
      height: string;
    };
    alt: string;
  };
  className?: string;
}

export const ReviewCard = ({ name, program, date, quote, text, image, className }: ReviewCardProps) => {
  return (
    <div className={`${styles.reviewCard} ${className || ''}`}>
      <div className={styles.reviewCard__user}>
        <div className={styles.reviewCard__user_inner}>
          <picture>
            <source
              type="image/webp"
              srcSet={image.webp.srcSet}
              width={image.webp.width}
              height={image.webp.height}
            />
            <img
              className={styles.reviewCard__img}
              src={image.jpg.src}
              srcSet={image.jpg.srcSet}
              alt={image.alt}
              width={image.jpg.width}
              height={image.jpg.height}
            />
          </picture>
          <h3 className={styles.reviewCard__name}>{name}</h3>
        </div>
        <div className={styles.reviewCard__data_inner}>
          <div className={styles.reviewCard__content}>
            <span className={styles.reviewCard__label}>Программа</span> <br />
            {program}
          </div>
          <div className={styles.reviewCard__content}>
            <span className={styles.reviewCard__label}>Дата</span> <br />
            {date}
          </div>
        </div>
      </div>
      <blockquote className={styles.reviewCard__quote}>
        {quote}
      </blockquote>
      <p>{text}</p>
    </div>
  );
}; 