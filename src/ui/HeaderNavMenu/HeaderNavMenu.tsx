import { useRef, useEffect } from 'react';
import styles from './HeaderNavMenu.module.scss';

interface HeaderNavMenuProps {
	menuOpen: boolean;
	toggleMenu: () => void;
}

export const HeaderNavMenu = ({ menuOpen, toggleMenu }: HeaderNavMenuProps) => {
	const navRef = useRef<HTMLElement>(null);

	const handleLinkClick = () => {
		toggleMenu();
	};

	const handleSummaryKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			const details = e.currentTarget.parentElement as HTMLDetailsElement;
			if (details) {
				details.open = !details.open;
			}
		}
	};

	// Управление фокусом при открытии/закрытии меню
	useEffect(() => {
		if (menuOpen && navRef.current) {
			// Перехватываем фокус при открытии меню
			navRef.current.focus();
		}
	}, [menuOpen]);

	// Ловушка фокуса для меню
	useEffect(() => {
		if (!menuOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Tab') {
				const focusableElements = navRef.current?.querySelectorAll(
					'a[href], button, summary, [tabindex]:not([tabindex="-1"])'
				);
				
				if (!focusableElements || focusableElements.length === 0) return;

				const firstElement = focusableElements[0] as HTMLElement;
				const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

				if (e.shiftKey) {
					// Shift + Tab - движение назад
					if (document.activeElement === firstElement) {
						e.preventDefault();
						lastElement.focus();
					}
				} else {
					// Tab - движение вперед
					if (document.activeElement === lastElement) {
						e.preventDefault();
						firstElement.focus();
					}
				}
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [menuOpen]);

	return (
		<>
			<div
				className={`${styles.overlay} ${menuOpen ? styles.active : ''}`}
				onClick={toggleMenu}
			/>
			<nav
				ref={navRef}
				className={styles.nav}
				hidden={!menuOpen}
				aria-label="Главное меню"
				tabIndex={-1}
				role="navigation"
			>
				<ul className={styles.list}>
					<li className={styles.navItem}>
						<a href="#about" onClick={handleLinkClick}>О проекте</a>
					</li>

					<li className={styles.navItem}>
						<details className={styles.navDetails}>
							<summary tabIndex={0} onKeyDown={handleSummaryKeyDown}>Программы</summary>
							<ul className={styles.subMenu}>
								<li><a href="#internships" onClick={handleLinkClick}>Стажировки</a></li>
								<li><a href="#volunteering" onClick={handleLinkClick}>Волонтёрство</a></li>
								<li><a href="#study" onClick={handleLinkClick}>Учёба</a></li>
								<li><a href="#religion" className={styles.isDisabled} onClick={handleLinkClick}>Религия</a></li>
							</ul>
						</details>
					</li>

					<li className={styles.navItem}>
						<a href="#grant" onClick={handleLinkClick}>Как поехать</a>
					</li>

					<li className={styles.navItem}>
						<a href="#reviews" onClick={handleLinkClick}>Отзывы</a>
					</li>

					<li className={styles.navItem}>
						<details className={styles.navDetails}>
							<summary tabIndex={0} onKeyDown={handleSummaryKeyDown}>Новости</summary>
							<ul className={styles.subMenu}>
								<li><a href="#news" onClick={handleLinkClick}>Пресса</a></li>
								<li><a href="#faq" onClick={handleLinkClick}>Обновления</a></li>
							</ul>
						</details>
					</li>

					<li className={styles.navItem}>
						<a href="#contacts" onClick={handleLinkClick}>Контакты</a>
					</li>
				</ul>
			</nav>
		</>
	);
};
