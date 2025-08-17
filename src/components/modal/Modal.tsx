import { useState, useEffect, useRef } from 'react';  
import styles from './Modal.module.scss';
import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { Text } from '../../ui/Text/Text';
import { MainButton } from '../../ui/MainButton/MainButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [validated, setValidated] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Обработка клавиши Escape и управление фокусом
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Перехватываем фокус при открытии модального окна
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setValidated(true);

    if (form.checkValidity()) {
      // Отправляем форму
      const formData = new FormData(form);
      
      fetch('https://echo.htmlacademy.ru', { 
        method: 'POST', 
        body: formData 
      })
      .then(response => {
        if (response.ok) {
          alert('Форма успешно отправлена!');
          onClose(); // Закрываем модальное окно после успешной отправки
        } else {
          alert('Ошибка при отправке формы');
        }
      })
      .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке формы');
      });
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setValidated(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={handleBackdropClick}>
      <div className={styles.modal__content} ref={modalRef} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button 
          className={styles.modal__close} 
          type="button" 
          onClick={() => {
            setValidated(false);
            onClose();
          }}
          aria-label="закрыть окно"
        >
          <span className="visually_hidden">закрыть окно</span>
        </button>
        
        <SectionTitle text="Напишите нам" className={styles.modal__form_title} id="modal-title" />
        <Text className={styles.modal__form_subtitle}>
          Оставьте ваши контакты, <br className="br-mobile" />
          если у вас остались вопросы – <br className="br-mobile" />
          мы на них ответим!
        </Text>

        <form
          className={`${styles.modal__form} ${validated ? styles.modal__form__validated : ''}`}
          action="https://echo.htmlacademy.ru"
          method="post"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className={styles.modal__form_field}>
            <label className={styles.modal__form_label} htmlFor="form-name">Имя</label>
            <input
              className={styles.modal__form_input}
              type="text"
              id="form-name"
              name="name"
              required
              pattern="[А-Яа-яЁё\s\-]+"
              title="Разрешены только буквы, пробелы и дефис"
            />
          </div>

          <div className={styles.modal__form_field}>
            <label className={styles.modal__form_label} htmlFor="form-phone">Телефон</label>
            <input
              className={styles.modal__form_input}
              type="tel"
              id="form-phone"
              name="phone"
              required
              pattern="[0-9+\-\(\)\s]+"
              inputMode="tel"
              placeholder="+7 (999) 123-45-67"
            />
          </div>

          <div className={`${styles.modal__form_field} ${styles.modal__form_select_wrapper}`}>
            <label className={styles.modal__form_label} htmlFor="form-city">Выберите город</label>
            <select
              className={`${styles.modal__form_input} ${styles.modal__form_select}`}
              id="form-city"
              name="city"
              required
            >
              <option value="" label="Выберите город" disabled selected></option>
              <option value="msk">Москва</option>
              <option value="nsk">Новосибирск</option>
              <option value="spb">Санкт-Петербург</option>
            </select>
          </div>

          <div className={styles.modal__form_checkbox}>
            <input
              className={styles.modal__form_checkbox_input}
              name="checkbox"
              type="checkbox"
              id="agreement"
              required
            />
            <label className={styles.modal__form_checkbox_label} htmlFor="agreement">
              Я согласен на обработку моих персональных данных
            </label>
          </div>

          <MainButton
            text="Отправить"
            iconType="arrow"
            type="submit"
            className={styles.modal__form_button}
          />
        </form>
      </div>
    </div>
  );
}; 