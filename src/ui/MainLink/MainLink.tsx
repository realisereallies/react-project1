import styles from './MainLink.module.scss';
import clsx from 'clsx';

interface MainLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  iconType?: 'arrow' | 'burger' | 'plus' | 'minus';
  className?: string;
}

export const MainLink = ({
  text,
  iconType = 'arrow',
  className,
  ...props
}: MainLinkProps) => {
  return (
    <a
      className={clsx(styles.mainLink, styles[iconType], className)}
      {...props}
    >
      {text}
    </a>
  );
}; 