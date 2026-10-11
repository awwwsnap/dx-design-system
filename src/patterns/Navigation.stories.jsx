import { Sidebar } from './Sidebar';
import { NavItem } from '../components/NavItem';
import './Patterns.css';

export default { title: 'Patterns/Навигация', parameters: { layout: 'fullscreen' } };

export const SidebarView = { name: 'Левый сайдбар', parameters: { layout: 'centered' }, render: () => <Sidebar /> };

const parts = [
  ['Контейнер', 'nav-item-bg · -hover'],
  ['Свечение слева', 'nav-item-glow'],
  ['Иконка', 'default / active'],
  ['Точка', 'nav-item-dot'],
  ['Подпись', 'nav-item-text'],
  ['Счётчик', 'nav-item-counter-bg'],
  ['Бейдж', 'nav-item-badge-bg'],
];

export const States = {
  name: 'Пункт меню: состояния',
  parameters: { layout: 'centered' },
  render: () => (
    <div style={{ zoom: 1.6, display: 'grid', gap: 14, padding: 14, background: 'var(--bg-floating)', borderRadius: 16 }}>
      <NavItem state="hover" dot counter="0%" />
      <NavItem state="default" dot counter="0%" />
      <NavItem state="default" dot badge="Новое" />
    </div>
  ),
};

export const Anatomy = {
  name: 'Пункт меню: в разборке',
  render: () => (
    <div className="dis">
      <div className="frame" style={{ display: 'grid', gap: 12, padding: 14, background: 'var(--bg-floating)', borderRadius: 16 }}>
        <NavItem state="hover" dot counter="0%" />
        <NavItem state="default" dot counter="0%" />
        <NavItem state="default" dot badge="Новое" />
      </div>
      <ul>{parts.map(([n, t]) => <li key={n}><b>{n}</b><code>{t}</code></li>)}</ul>
    </div>
  ),
};
