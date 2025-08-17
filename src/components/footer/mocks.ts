export interface FooterNavLink {
  href: string;
  text: string;
}

export interface SocialLink {
  href: string;
  label: string;
  className: string;
}

export const footerNavLinks: FooterNavLink[] = [
  { href: '#about', text: 'О проекте' },
  { href: '#programs', text: 'Программы' },
  { href: '#grant', text: 'Как поехать' },
  { href: '#reviews', text: 'Отзывы' },
  { href: '#news', text: 'Новости' },
  { href: '#contacts', text: 'Контакты' },
];

export const socialLinks: SocialLink[] = [
  { href: 'https://vk.com/feed', label: 'vk', className: 'item_vk' },
  { href: 'https://ok.ru/', label: 'ok', className: 'item_ok' },
  { href: 'https://ok.ru/', label: 'reddit', className: 'item_reddit' },
]; 