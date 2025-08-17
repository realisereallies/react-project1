import React from 'react';
import { BR } from '../../ui/BR/BR';

interface ProgramSource {
    media?: string;
    type: string;
    srcSet: string;
    width: string;
    height: string;
  }
  
  interface ProgramImage {
    src: string;
    srcSet: string;
    alt: string;
    width: string;
    height: string;
  }
  
  interface ProgramData {
    id: string;
    title: string;
    description: React.ReactNode;
    sources: ProgramSource[];
    img: ProgramImage;
  }
  
export const programsData: ProgramData[] = [
	{
		id: 'internships',
		title: 'Стажировки',
		description: 'Получите незаменимый опыт работы в крупнейших мировых компаниях.',
		sources: [
		  { media: '(min-width: 1440px)', type: 'image/webp', srcSet: '/programs-desktop--1@1x.webp 1x, /programs-desktop--1@2x.webp 2x', width: '392', height: '420' },
		  { media: '(min-width: 768px)', type: 'image/webp', srcSet: '/programs-tablet--1@1x.webp 1x, /programs-tablet--1@2x.webp 2x', width: '324', height: '420' },
		  { type: 'image/webp', srcSet: '/programs-mobile--1@1x.webp 1x, /programs-mobile--1@2x.webp 2x', width: '290', height: '400' },
		  { media: '(min-width: 1440px)', type: 'image/jpeg', srcSet: '/programs-desktop--1@1x.jpg 1x, /programs-desktop--1@2x.jpg 2x', width: '392', height: '420' },
		  { media: '(min-width: 768px)', type: 'image/jpeg', srcSet: '/programs-tablet--1@1x.jpg 1x, /programs-tablet--1@2x.jpg 2x', width: '324', height: '420' },
		],
		img: { src: '/programs-mobile--1@1x.jpg', srcSet: '/programs-mobile--1@2x.jpg 2x', alt: 'Две женщины обсуждают документы', width: '290', height: '400' },
	  },

	  {
		id: 'internships',
		title: 'Волонтёрство',
		description: React.createElement(React.Fragment, null,
		  'Помогайте другим ',
		  React.createElement(BR, { at: "md" }),
		  'и развивайте свои ',
		  React.createElement(BR, { at: "md" }),
		  'лидерские качества'
		),
		sources: [
		  { media: '(min-width: 1440px)', type: 'image/webp', srcSet: '/programs-desktop--2@1x.webp 1x, /programs-desktop--2@2x.webp 2x', width: '392', height: '420' },
		  { media: '(min-width: 768px)', type: 'image/webp', srcSet: '/programs-tablet--2@1x.webp 1x, /programs-tablet--2@2x.webp 2x', width: '324', height: '420' },
		  { type: 'image/webp', srcSet: '/programs-mobile--2@1x.webp 1x, /programs-mobile--2@2x.webp 2x', width: '290', height: '400' },
		  { media: '(min-width: 1440px)', type: 'image/jpeg', srcSet: '/programs-desktop--2@1x.jpg 1x, /programs-desktop--2@2x.jpg 2x', width: '392', height: '420' },
		  { media: '(min-width: 768px)', type: 'image/jpeg', srcSet: '/programs-tablet--2@1x.jpg 1x, /programs-tablet--2@2x.jpg 2x', width: '324', height: '420' },
		],
		img: { src: '/programs-mobile--2@1x.jpg', srcSet: '/programs-mobile--2@2x.jpg 2x', alt: 'Две женщины обсуждают документы', width: '290', height: '400' },
	  },

	  {
		id: 'internships',
		title: 'Учёба',
		description: 'Получите образование и измените своё будущее.',
		sources: [
		  { media: '(min-width: 1440px)', type: 'image/webp', srcSet: '/programs-desktop--3@1x.webp 1x, /programs-desktop--3@2x.webp 2x', width: '392', height: '420' },
		  { media: '(min-width: 768px)', type: 'image/webp', srcSet: '/programs-tablet--3@1x.webp 1x, /programs-tablet--3@2x.webp 2x', width: '324', height: '420' },
		  { type: 'image/webp', srcSet: '/programs-mobile--1@1x.webp 1x, /programs-mobile--1@2x.webp 2x', width: '290', height: '400' },
		  { media: '(min-width: 1440px)', type: 'image/jpeg', srcSet: '/programs-desktop--3@1x.jpg 1x, /programs-desktop--3@2x.jpg 2x', width: '392', height: '420' },
		  { media: '(min-width: 768px)', type: 'image/jpeg', srcSet: '/programs-tablet--3@1x.jpg 1x, /programs-tablet--3@2x.jpg 2x', width: '324', height: '420' },
		],
		img: { src: '/programs-mobile--1@1x.jpg', srcSet: '/programs-mobile--1@2x.jpg 2x', alt: 'Две женщины обсуждают документы', width: '290', height: '400' },
	  },

	  {
		id: 'internships',
		title: 'Учёба',
		description: 'Получите образование и измените своё будущее.',
		sources: [
		  { media: '(min-width: 1440px)', type: 'image/webp', srcSet: '/programs-desktop--3@1x.webp 1x, /programs-desktop--3@2x.webp 2x', width: '392', height: '420' },
		  { media: '(min-width: 768px)', type: 'image/webp', srcSet: '/programs-tablet--3@1x.webp 1x, /programs-tablet--3@2x.webp 2x', width: '324', height: '420' },
		  { type: 'image/webp', srcSet: '/programs-mobile--1@1x.webp 1x, /programs-mobile--1@2x.webp 2x', width: '290', height: '400' },
		  { media: '(min-width: 1440px)', type: 'image/jpeg', srcSet: '/programs-desktop--3@1x.jpg 1x, /programs-desktop--3@2x.jpg 2x', width: '392', height: '420' },
		  { media: '(min-width: 768px)', type: 'image/jpeg', srcSet: '/programs-tablet--3@1x.jpg 1x, /programs-tablet--3@2x.jpg 2x', width: '324', height: '420' },
		],
		img: { src: '/programs-mobile--1@1x.jpg', srcSet: '/programs-mobile--1@2x.jpg 2x', alt: 'Две женщины обсуждают документы', width: '290', height: '400' },
	  },
];