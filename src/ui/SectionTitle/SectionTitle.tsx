import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  text: string;
  color?: 'default' | 'white' | 'primary';
  className?: string;
  id?: string;
}

export const SectionTitle = ({ text, color = 'primary', className = '', id }: SectionTitleProps) => {
  return <h2 id={id} className={`${styles.title} ${styles[color]} ${className}`}>{text}</h2>;
};
