import styles from './Footer.module.scss';
import { footerNavLinks } from './mocks';
import { SocialList } from './SocialList';
import { Logo } from '../../ui/Logo/Logo';

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer} data-test="footer">
        <div className={styles.footer__container}>
          <div className={styles.footer__inner}>
            <div className={styles.footer__nav_wrapper}>
              <div className={styles.footer__logo_inner}>
			  <Logo />
              </div>
              <nav className={styles.footer__nav} aria-label="Дополнительная навигация">
                <ul className={styles.footer__menu}>
                  {footerNavLinks.map((link) => (
                    <li key={link.href}>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <SocialList className={styles.footer__social_list__desktop} />
          </div>

          <div className={styles.footer__wrapper}>
            <div className={styles.footer__privacy_wrapper}>
              <a className={styles.footer__privacy} href="#">Политика конфиденциальности</a>
              <p className={styles.footer__copy}>Стажировка © 2023 Все права защищены</p>
            </div>
            <SocialList />
          </div>
        </div>
      </footer>


    </>
  );
};
