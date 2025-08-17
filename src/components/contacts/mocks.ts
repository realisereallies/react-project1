import React from 'react';
import type { ReactNode } from 'react';
import { BR } from '../../ui/BR/BR';

export interface ContactItem {
  label: string;
  value: ReactNode;
  modifier?: string;
}

export const contactItems: ContactItem[] = [
  {
    label: 'Центральный офис',
    value: React.createElement(React.Fragment, null,
      "г. Новосибирск, ул. Щетинкина 68,",
      React.createElement(BR, { at: "lg" }),
      " культурный центр"
    ),
    modifier: 'adress',
  },
  {
    label: 'Телефон',
    value: '+7 963 876 876 76',
  },
  {
    label: 'Email',
    value: 'info@stazh.ru',
  },
]; 