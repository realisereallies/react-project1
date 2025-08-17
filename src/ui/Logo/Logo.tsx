import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img
        className={styles.logo}
        src="/logo.svg"
        alt="Логотип"
        width="30"
        height="30"
      />
    </div>
  );
};
