import { NavItem } from './NavItem';

export default {
  title: 'Components/NavItem',
  component: NavItem,
  decorators: [(S) => <div style={{ width: 294 }}><S /></div>],
  args: { label: 'Виджеты', active: false, dot: false },
};

export const Default = {};
export const Active = { args: { active: true } };
export const WithDot = { name: 'С индикатором', args: { dot: true } };
export const WithCounter = { name: 'Со счётчиком', args: { counter: '0%' } };
export const WithBadge = { name: 'Бейдж «Новое»', args: { badge: 'Новое', dot: true } };
// Наведи курсор на любой пункт: фон, иконка и фиолетовое свечение слева меняются
