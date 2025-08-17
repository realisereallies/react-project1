import './Text.module.scss'

interface TextProps {
	children: React.ReactNode;
	fontSize?: number | string;
	lineHeight?: number | string;
	fontWeight?: 300 | 400 | 500 | 600 | 700;
	color?: string;
	className?: string;
	as?: 'p' | 'span' | 'div';
  }

  export const Text = ({
	children,
	fontSize,
	lineHeight,
	fontWeight,
	color,
	className = '',
	as: Component = 'p',
  }: TextProps) => {
	const style: React.CSSProperties = {
	  fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
	  lineHeight: typeof lineHeight === 'number' ? `${lineHeight}px` : lineHeight,
	  fontWeight,
	  color,
	};

	return (
	  <Component className={className} style={style}>
		{children}
	  </Component>
	);
  };
