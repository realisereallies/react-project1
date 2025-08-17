import styles from './Contacts.module.scss';

export const ContactsMap = () => (
  <div className={styles.contacts__map}>
    <picture>
      <source
        media="(min-width: 1440px)"
        type="image/webp"
        srcSet="/map-desktop@1x.webp 1x, /map-desktop@2x.webp 2x"
        width="1240"
        height="486"
      />
      <source
        media="(min-width: 768px)"
        type="image/webp"
        srcSet="/map-tablet@1x.webp 1x, /map-tablet@2x.webp 2x"
        width="678"
        height="500"
      />
      <source
        type="image/webp"
        srcSet="/map-mobile@1x.webp 1x, /map-mobile@2x.webp 2x"
        width="290"
        height="240"
      />
      <source
        media="(min-width: 1440px)"
        type="image/jpeg"
        srcSet="/map-desktop@1x.jpg 1x, /map-desktop@2x.jpg 2x"
        width="1240"
        height="486"
      />
      <source
        media="(min-width: 768px)"
        type="image/jpeg"
        srcSet="/map-tablet@1x.jpg 1x, /map-tablet@2x.jpg 2x"
        width="678"
        height="500"
      />
      <img
        className={styles.contacts__map__img}
        src="/map-mobile@1x.jpg"
        srcSet="/map-mobile@2x.jpg 2x"
        alt="Карта"
        width="290"
        height="240"
      />
    </picture>
  </div>
); 