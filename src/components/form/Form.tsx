import { useState } from 'react';
import styles from './Form.module.scss';
import { formFields } from './mocks';
import type { FormField } from './mocks';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { Text } from '../../ui/Text/Text';

export const Form = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setValidated(true);

    if (form.checkValidity()) {
      // Здесь можно сделать fetch или отправку
      // fetch('https://echo.htmlacademy.ru', { method: 'POST', body: new FormData(form) })
      form.submit();
    }
  };

  const renderField = (field: FormField) => {
    const baseClass = styles.form__input;

    if (field.type === 'textarea') {
      return (
        <div key={field.id} className={`${styles.form__field} ${styles.form__field__text}`}>
          <label htmlFor={field.id} className={styles.form__label}>{field.label}</label>
          <textarea
            id={field.id}
            name={field.name}
            className={`${baseClass} ${styles.form__textarea}`}
          />
        </div>
      );
    }

    if (field.type === 'select') {
      return (
        <div key={field.id} className={styles.form__field}>
          <label htmlFor={field.id} className={styles.form__label}>{field.label}</label>
          <select
            id={field.id}
            name={field.name}
            className={`${baseClass} ${styles.form__select}`}
            required={field.required}
          >
            {field.options?.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                disabled={opt.disabled}
                selected={opt.selected}
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      );
    }

    return (
      <div key={field.id} className={styles.form__field}>
        <label htmlFor={field.id} className={styles.form__label}>{field.label}</label>
        <input
          id={field.id}
          name={field.name}
          type={field.type}
          className={baseClass}
          required={field.required}
          pattern={field.pattern}
          title={field.title}
          inputMode={field.inputMode as 'tel' | 'text' | undefined}
        />
      </div>
    );
  };

  return (
    <section className={styles.form} data-test="form">
      <div className={styles.form__wrapper}>
        <div className={styles.form__container}>
          <SectionTitle text="Напишите нам" className={styles.form__title} color="white"/>
          <Text className={styles.form__subtitle}>
            Оставьте ваши контакты, если у вас остались вопросы — мы на них ответим!
          </Text>

          <form
            className={`${styles.form__form} ${validated ? styles.form__form__validated : ''}`}
            action="https://echo.htmlacademy.ru"
            method="post"
            noValidate
            onSubmit={handleSubmit}
          >
            {formFields.map(renderField)}

            <div className={`${styles.form__field} ${styles.form__checkbox__wrapper}`}>
              <input
                className={styles.form__checkbox__input}
                name="checkbox"
                type="checkbox"
                id="form_agreement"
                required
              />
              <label className={styles.form__checkbox__title} htmlFor="form_agreement">
                Я согласен на обработку моих персональных <br className="br-sm" />
                данных
              </label>
            </div>
            <button className={styles.form__submit} type="submit">
              ОТПРАВИТЬ
            </button>
          </form>

          <picture className="visually_hidden">
            <img
              className={styles.form__image}
              src="/img/form_background.jpg"
              alt="Город в облаках"
              width="320"
              height="753"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
