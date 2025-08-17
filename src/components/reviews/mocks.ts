import React from 'react';
import { BR } from '../../ui/BR/BR';

export interface ReviewItem {
  id: number;
  name: string | React.ReactElement;
  program: string;
  date: string;
  quote: string | React.ReactElement;
  text: string | React.ReactElement;
  image: {
    webp: {
      srcSet: string;
      width: string;
      height: string;
    };
    jpg: {
      src: string;
      srcSet: string;
      width: string;
      height: string;
    };
    alt: string;
  };
}

export const reviewsItems: ReviewItem[] = [
  {
    id: 1,
    name: React.createElement(React.Fragment, null,
      "Лола ",
      React.createElement(BR, { at: "all" }),
      "Алекс"
    ),
    program: 'Masa Art Challenge',
    date: 'Осень 2022',
    quote: React.createElement(React.Fragment, null,
      "Я могу с уверенностью сказать, что это был один из самых незабываемых опытов ",
      React.createElement(BR, { at: "lg" }),
      "в жизни!"
    ),
    text: React.createElement(React.Fragment, null,
      "Я рекомендую программу «Стажировка» всем студентам, желающим получить незабываемые впечатления. Сочетание путешествий, общения и значимой работы действительно отличает ",
      React.createElement(BR, { at: "sm" }),
      "её от других программ,",
      React.createElement(BR, { at: "md" }),
      " и я чувствую огромную благодарность ",
      React.createElement(BR, { at: "sm-md" }),
      "за предоставленную ",
      React.createElement(BR, { at: "sm" }),
      "мне возможность."
    ),
    image: {
      webp: {
        srcSet: '/review--1@1x.webp 1x, /review--1@2x.webp 2x',
        width: '60',
        height: '60',
      },
      jpg: {
        src: '/review--1@1x.jpg',
        srcSet: '/review--1@2x.jpg 2x',
        width: '60',
        height: '60',
      },
      alt: 'Фото Лолы',
    },
  },
  {
    id: 2,
    name: React.createElement(React.Fragment, null,
      "Давид ",
      React.createElement(BR, { at: "all" }),
      "Иванов"
    ),
    program: 'Volunteer Chance',
    date: 'Лето 2022',
    quote: React.createElement(React.Fragment, null,
      "Благодаря опыту стажировки я узнал ",
      React.createElement(BR, { at: "lg" }),
      "так много нового о себе и об окружающем мире."
    ),
    text: React.createElement(React.Fragment, null,
      "Каждый день был возможностью оказать ощутимое влияние на жизнь других людей. Я бы очень рекомендовал ",
      React.createElement(BR, { at: "lg" }),
      "эту волонтёрскую программу всем, кто ищет значимый ",
      React.createElement(BR, { at: "lg" }),
      React.createElement(BR, { at: "md" }),
      "и незабываемый опыт. Организация была на высшем уровне. Для меня было честью быть частью такой удивительной инициативы."
    ),
    image: {
      webp: {
        srcSet: '/review--2@1x.webp 1x, /review--2@2x.webp 2x',
        width: '60',
        height: '60',
      },
      jpg: {
        src: '/review--2@1x.jpg',
        srcSet: '/review--2@2x.jpg 2x',
        width: '60',
        height: '60',
      },
      alt: 'Фото Давида',
    },
  },
  {
    id: 3,
    name: React.createElement(React.Fragment, null,
      "Лола ",
      React.createElement(BR, { at: "all" }),
      "Алекс"
    ),
    program: 'Masa Art Challenge',
    date: 'Осень 2022',
    quote: React.createElement(React.Fragment, null,
      "Я могу с уверенностью сказать, что это был один из самых незабываемых опытов ",
      React.createElement(BR, { at: "lg" }),
      "в жизни!"
    ),
    text: React.createElement(React.Fragment, null,
      "Я рекомендую программу «Стажировка» всем студентам, желающим получить незабываемые впечатления. Сочетание путешествий, общения и значимой работы действительно отличает ",
      React.createElement(BR, { at: "sm" }),
      "её от других ",
      React.createElement(BR, { at: "md" }),
      "программ, и я чувствую огромную благодарность за предоставленную мне возможность."
    ),
    image: {
      webp: {
        srcSet: '/review--1@1x.webp 1x, /review--1@2x.webp 2x',
        width: '60',
        height: '60',
      },
      jpg: {
        src: '/review--1@1x.jpg',
        srcSet: '/review--1@2x.jpg 2x',
        width: '60',
        height: '60',
      },
      alt: 'Фото Лолы',
    },
  },
]; 