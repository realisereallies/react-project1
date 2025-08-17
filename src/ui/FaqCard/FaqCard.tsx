import { useState } from 'react';
import styles from './FaqCard.module.scss';

interface FaqCardProps {
  question: string | React.ReactElement;
  answer: string | React.ReactElement;
  open?: boolean;
  className?: string;
}

export const FaqCard = ({ question, answer, open = false, className }: FaqCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <li className={`${styles.faqCard} ${className || ''}`}>
      <details
        className={`${styles.faqCard__details} ${hovered ? styles.hovered : ''} ${active ? styles.active : ''}`}
        open={open}
      >
        <summary
          className={styles.faqCard__question}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => {
            setHovered(false);
            setActive(false);
          }}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
        >
          {question}
        </summary>
        <div className={styles.faqCard__answer}>
          <p>{answer}</p>
        </div>
      </details>
    </li>
  );
}; 