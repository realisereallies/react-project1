export interface HeroImage {
  desktop: string;
  desktopWebp: string;
  tablet: string;
  tabletWebp: string;
  mobile: string;
  mobileWebp: string;
}

import React from 'react';
import { BR } from '../../ui/BR/BR';

export interface HeroSlide {
  id: number;
  image: HeroImage;
  alt: string;
  title: React.ReactNode;
  text: React.ReactNode;
}

export const heroSlidesData: HeroSlide[] = [
  {
    id: 1,
    image: {
      desktop: "/hero-desktop--1@1x.jpg",
      desktopWebp: "/hero-desktop--1@1x.webp",
      tablet: "/hero-tablet--1@1x.jpg",
      tabletWebp: "/hero-tablet--1@1x.webp",
      mobile: "/hero-mobile--1@1x.jpg",
      mobileWebp: "/hero-mobile--1@1x.webp"
    },
    alt: "Студентка с книгами на фоне здания",
        title: React.createElement(React.Fragment, null, 
      "Глобальный профессиональный ",
      React.createElement(BR, { at: "sm" }),
      "опыт обучения ",
      React.createElement(BR, { at: "sm" }),
      "за рубежом"
    ),
    text: React.createElement(React.Fragment, null,
      "Погрузитесь в академическую программу, проходя практику ",
      React.createElement(BR, { at: "sm-md" }),
      "в разных городах, ощущая настоящий студенческий ",
      React.createElement(BR, { at: "sm" }),
      "стиль жизни!"
    )
  },
  {
    id: 2,
    image: {
      desktop: "/hero-desktop--2@1x.jpg",
      desktopWebp: "/hero-desktop--2@1x.webp",
      tablet: "/hero-tablet--2@1x.jpg",
      tabletWebp: "/hero-tablet--2@1x.webp",
      mobile: "/hero-mobile--2@1x.jpg",
      mobileWebp: "/hero-mobile--2@1x.webp"
    },
    alt: "Студенты в библиотеке",
    title: "Международное образование для вашего будущего",
    text: "Получите качественное образование в ведущих университетах мира и откройте новые возможности для карьеры!"
  },
  {
    id: 3,
    image: {
      desktop: "/hero-desktop--3@1x.jpg",
      desktopWebp: "/hero-desktop--3@1x.webp",
      tablet: "/hero-tablet--3@1x.jpg",
      tabletWebp: "/hero-tablet--3@1x.webp",
      mobile: "/hero-mobile--3@1x.jpg",
      mobileWebp: "/hero-mobile--3@1x.webp"
    },
    alt: "Студенты на кампусе",
    title: "Современные технологии в образовании",
    text: "Изучайте передовые технологии и инновационные подходы в ведущих образовательных центрах мира!"
  }
]; 