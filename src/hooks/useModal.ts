import { useState, useCallback, useEffect } from 'react';

export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => {
    setIsOpen(true);
    // Блокируем скролл
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    // Разблокируем скролл
    document.body.style.overflow = 'unset';
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => {
      const newState = !prev;
      document.body.style.overflow = newState ? 'hidden' : 'unset';
      return newState;
    });
  }, []);

  // Очищаем стили при размонтировании
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle
  };
}; 