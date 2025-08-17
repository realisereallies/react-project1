import clsx from 'clsx';
import styles from './GrantCard.module.scss';

interface GrantCardProps {
  text: React.ReactNode;
  className?: string;
}

export const GrantCard = ({ text, className }: GrantCardProps) => {
  return (
    <li className={clsx(styles.card, className)}>
      {text}
    </li>
  );
}; 