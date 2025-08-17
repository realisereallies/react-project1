import styles from './MainToggle.module.scss';
import clsx from 'clsx';

interface MainToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	iconType?: 'arrow' | 'burger' | 'plus' | 'minus';
	className?: string;
}

export const MainToggle = ({
	text,
	iconType = 'arrow',
	className,
	...props
}: MainToggleProps) => {
	return (
		<button
			type="button"
			className={clsx(styles.mainToggle, styles[iconType], className)}
			{...props}
		>
			{text}
		</button>
	);
}; 