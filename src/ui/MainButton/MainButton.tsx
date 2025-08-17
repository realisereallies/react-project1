
import styles from './MainButton.module.scss';
import clsx from 'clsx';

interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	iconType?: 'arrow' | 'burger' | 'plus' | 'minus';
	className?: string;
  }


export const MainButton = ({
	text,
	iconType = 'arrow',
	className,
	...props
  }: MainButtonProps) => {
	return (
	  <button
		className={clsx(styles.mainButton, styles[iconType], className)}
		{...props}
	  >
		{text}
	  </button>
	);
  };
