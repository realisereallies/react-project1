import styles from './Footer.module.scss';
import { socialLinks } from './mocks';

interface SocialListProps {
  className?: string;
}

export const SocialList = ({ className = '' }: SocialListProps) => (
  <ul className={`${styles.footer__social_list} ${className}`}>
    {socialLinks.map((item) => (
      <li key={item.label}>
        <a
          className={`${styles.footer__social_item} ${styles[item.className]}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.visually_hidden}>{item.label}</span>
        </a>
      </li>
    ))}
  </ul>
); 