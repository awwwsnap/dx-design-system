import { NavItem } from './NavItem';

export default {
  title: 'Components/NavItem',
  component: NavItem,
  args: { label: 'Виджеты', state: 'default', dot: false },
  argTypes: { state: { control: 'inline-radio', options: ['default', 'hover', 'active'] } },
};

export const Default = {};
export const Hover = { args: { state: 'hover' } };
export const Active = { args: { state: 'active', dot: true } };
export const WithCounter = { args: { counter: '0%' } };
export const WithBadge = { args: { badge: 'Новое' } };
export const WithDot = { args: { dot: true } };
