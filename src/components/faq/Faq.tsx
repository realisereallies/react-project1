import styles from './Faq.module.scss';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { FaqCard } from '../../ui/FaqCard';
import { faqItems } from './mocks';

const Faq = () => {
  return (
    <section className={styles.faq} data-test="FAQ" id="faq">
      <SectionTitle text="Вопросы и ответы" className={styles.faq__title} />
      <ul className={styles.faq__list}>
        {faqItems.map((item, index) => (
          <FaqCard
            key={index}
            question={item.question}
            answer={item.answer}
            open={item.open}
            className={styles.faq__item}
          />
        ))}
      </ul>
    </section>
  );
};

export default Faq;
