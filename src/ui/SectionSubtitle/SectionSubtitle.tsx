import styles from './SectionSubtitle.module.scss';

interface SectionSubtitleProps {
  text: string;
  color?: 'default' | 'white' | 'primary';
  className?: string;
  children?: React.ReactNode;
}

export const SectionSubtitle = ({ text, color = 'primary', className = '', children }: SectionSubtitleProps) => {
	return <h3 className={`${styles.subtitle} ${styles[color]} ${className}`}>{children || text}</h3>
};
