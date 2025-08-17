import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Logo } from '../../ui/Logo/Logo';
import { HeaderNavMenu } from '../../ui/HeaderNavMenu/HeaderNavMenu';
import { MainToggle } from '../../ui/MainToggle/MainToggle';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Блокируем/разблокируем скролл при изменении состояния меню
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Очищаем стили при размонтировании компонента
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className={styles['header']}>
      <div className={styles['header__container']}>

        <div className={styles['header__logo-inner']}>
		<Logo />
        </div>

        <div
          className={`${styles['header__nav-overlay']} ${menuOpen ? styles['header__nav-overlay--active'] : ''}`}
          onClick={toggleMenu}
        ></div>

		<HeaderNavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />

		<MainToggle
 		 	text="Меню"
  			iconType="burger"
 			type="button"
  			aria-expanded={menuOpen}
  			aria-label="Меню"
 			className={`${styles['header__menu-toggle']} ${menuOpen ? styles['header__menu-toggle--active'] : ''}`}
  			onClick={toggleMenu}
			/>
      </div>
    </header>
  );
};

export default Header;
