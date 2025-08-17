import clsx from 'clsx';
import styles from './FactCard.module.scss';

interface FactCardProps {
  title: React.ReactNode;
  text: React.ReactNode;
  iconType?: 'star' | 'number1' | 'number2' | 'number3' | 'number4'; // можно расширять
  className?: string;
}

export const FactCard = ({ title, text, iconType = 'star', className }: FactCardProps) => {
  return (
    <li className={clsx(styles.card, styles[`icon--${iconType}`], className)}>
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
};
