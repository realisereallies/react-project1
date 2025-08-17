export interface NewsTab {
  id: string;
  label: string;
}

import React from 'react';
import { BR } from '../../ui/BR/BR';

export interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string | React.ReactElement;
  text: string | React.ReactElement;
  img: string;
  imgTablet?: string;
  imgDesktop?: string;
}

export const tabs: NewsTab[] = [
  { id: 'all', label: 'Общее' },
  { id: 'volunteering', label: 'Волонтёрство' },
  { id: 'internships', label: 'Стажировки' },
  { id: 'career', label: 'Карьера' },
  { id: 'travel', label: 'Путешествия' },
];

export const newsItems: NewsItem[] = [
  {
    id: 1,
    category: 'internships',
    date: '23/03/2023',
    title: React.createElement(React.Fragment, null,
      "Интервью ",
      React.createElement(BR, { at: "md" }),
      "с участницей программы стажировки"
    ),
    text: React.createElement('div', { style: { whiteSpace: 'pre-line' } },
      "Саша рассказывает,",
      React.createElement(BR, { at: "md" }),
      " как попала ",
      React.createElement(BR, { at: "sm" }),
      "в программу и",
      React.createElement(BR, { at: "md" }),
      " как прошла 6-месячная стажировка в ISOFound."
    ),
    img: '/news--1@1x.webp',
    imgTablet: '/news-tablet--1@1x.webp',
    imgDesktop: '/news--1@1x.webp',
  },
  {
    id: 2,
    category: 'career',
    date: '20/03/2023',
    title: React.createElement(React.Fragment, null,
      "Путешествуем ",
      React.createElement(BR, { at: "md" }),
      "по миру"
    ),
    text: 'Какие места посещают наши студенты весной.',
    img: '/news--2@1x.webp',
    imgTablet: '/news-tablet--2@1x.webp',
    imgDesktop: '/news--2@1x.webp',
  },
  {
    id: 3,
    category: 'volunteering',
    date: '18/03/2023',
    title: 'Новая программа волонтёрства',
    text: 'Программа помощи детям длительностью 4 месяца',
    img: '/news--3@1x.webp',
  
  },
    {
    id: 4,
    category: 'career',
    date: '10/03/2023',
    title: 'Построй свою карьеру',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки.',
    img: '/news--4@1x.webp',
    imgTablet: '/news-tablet--4@1x.webp',
    imgDesktop: '/news--4@1x.webp',
  },
      {
      id: 5,
      category: 'career',
      date: '10/03/2023',
      title: 'Построй свою карьеру',
      text: 'Ведущие компании готовы трудоустроить выпускников стажировки.',
      img: '/news--4@1x.webp',
      imgTablet: '/news-tablet--4@1x.webp',
      imgDesktop: '/news--4@1x.webp',
    },
  {
    id: 6,
    category: 'career',
    date: '10/03/2023',
    title: 'Построй свою карьеру',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки.',
    img: '/news--4@1x.webp',
    imgTablet: '/news-tablet--4@1x.webp',
    imgDesktop: '/news--4@1x.webp',
  },
       {
      id: 7,
      category: 'career',
      date: '10/03/2023',
      title: 'Построй свою карьеру',
      text: 'Ведущие компании готовы трудоустроить выпускников стажировки.',
      img: '/news--4@1x.webp',
      imgTablet: '/news-tablet--4@1x.webp',
      imgDesktop: '/news--4@1x.webp',
    },
   {
    id: 8,
    category: 'career',
    date: '10/03/2023',
    title: 'Построй свою карьеру',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки.',
    img: '/news--4@1x.webp',
    imgTablet: '/news-tablet--4@1x.webp',
    imgDesktop: '/news--4@1x.webp',
  },
  {
    id: 9,
    category: 'career',
    date: '10/03/2023',
    title: 'Построй свою карьеру',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки.',
    img: '/news--4@1x.webp',
    imgTablet: '/news-tablet--4@1x.webp',
    imgDesktop: '/news--4@1x.webp',
  },
  {
    id: 10,
    category: 'career',
    date: '10/03/2023',
    title: 'Построй свою карьеру',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки.',
    img: '/news--4@1x.webp',
    imgTablet: '/news-tablet--4@1x.webp',
    imgDesktop: '/news--4@1x.webp',
  },
  {
    id: 11,
    category: 'career',
    date: '10/03/2023',
    title: 'Построй свою карьеру',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки.',
    img: '/news--4@1x.webp',
    imgTablet: '/news-tablet--4@1x.webp',
    imgDesktop: '/news--4@1x.webp',
  },
  {
    id: 12,
    category: 'career',
    date: '10/03/2023',
    title: 'Построй свою карьеру',
    text: 'Ведущие компании готовы трудоустроить выпускников стажировки.',
    img: '/news--4@1x.jpg',
  },
]; 