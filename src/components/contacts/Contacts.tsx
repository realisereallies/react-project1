import styles from './Contacts.module.scss';
import { contactItems } from './mocks';
import { ContactsMap } from './ContactsMap';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';

export const Contacts = () => {
  const renderContactValue = (item: typeof contactItems[0]) => {
    if (item.label === 'Центральный офис') {
      return (
        <p className={styles.contacts__info}>
          {item.value}
          <br className={styles.br__desktop} />
        </p>
      );
    }
    
    if (item.label === 'Телефон') {
      return (
        <a className={styles.contacts__info} href="tel:+796387687676">
          {item.value}
        </a>
      );
    }
    
    if (item.label === 'Email') {
      return (
        <a className={styles.contacts__info} href="mailto:info@stazh.ru">
          {item.value}
        </a>
      );
    }
    
    return <p className={styles.contacts__info}>{item.value}</p>;
  };

  return (
    <section className={styles.contacts} data-test="contacts" id="contacts">
      <div className={styles.contacts__container}>
        <SectionTitle text="Контакты" className={styles.contacts__title} color="white"/>
        <div className={styles.contacts__wrapper}>
          <div className={styles.contacts__blocks}>
            {contactItems.map((item, index) => (
              <div
                key={index}
                className={`${styles.contacts__block} ${
                  item.modifier === 'adress' ? styles.contacts__block__adress : ''
                }`}
              >
                <p className={`${styles.contacts__label} ${
                  item.modifier === 'adress' ? styles.contacts__label__adress : ''
                }`}>
                  {item.label}
                </p>
                {renderContactValue(item)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactsMap />
    </section>
  );
};
