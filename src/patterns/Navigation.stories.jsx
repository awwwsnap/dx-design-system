import { NavItem } from '../components/NavItem';
import { Button } from '../components/Button';
import './Navigation.css';

export default { title: 'Patterns/Навигация', parameters: { layout: 'fullscreen' } };

const names = ['Дашборд', 'Донаты', 'Виджеты', 'Алерты', 'Статистика', 'Выплаты', 'Партнёры', 'Поддержка', 'Интеграции'];

export const Sidebar = {
  name: 'Левое меню',
  render: () => (
    <div style={{ padding: 40 }}>
      <nav className="sb">
        <div className="sb__bal"><small>Баланс</small><b>₽ 0.00</b><Button>Вывести</Button></div>
        {names.map((n) => <NavItem key={n} label={n} active={n === 'Виджеты'} counter={n === 'Выплаты' ? '0%' : undefined} dot={n === 'Выплаты'} />)}
      </nav>
    </div>
  ),
};

const parts = [
  ['Контейнер', 'nav-item-bg · radius-m'],
  ['Контейнер: hover', 'nav-item-bg-hover'],
  ['Свечение слева', 'nav-item-glow'],
  ['Иконка', 'default / active'],
  ['Индикатор', 'nav-item-indicator'],
  ['Подпись', 'nav-item-text · label'],
  ['Счётчик', 'nav-item-counter-bg'],
  ['Бейдж «Новое»', 'nav-item-badge-bg'],
];

export const Anatomy = {
  name: 'Пункт меню в разборке',
  render: () => (
    <div className="nv-dis">
      <div className="zone">
        <div><div className="lbl">active / hover</div><NavItem active counter="0%" dot /></div>
        <div><div className="lbl">default</div><NavItem counter="0%" dot /></div>
        <div><div className="lbl">с бейджем</div><NavItem badge="Новое" dot /></div>
      </div>
      <ul>{parts.map(([n, t]) => <li key={n}><b>{n}</b><code>{t}</code></li>)}</ul>
    </div>
  ),
};
