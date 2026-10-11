import { NavItem } from '../components/NavItem';
import { Button } from '../components/Button';
import './Sidebar.css';

const ph = "data:image/svg+xml;utf8," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect x="4" y="5" width="16" height="14" rx="4" stroke="#4D4D4D" stroke-width="1.5"/></svg>');

export function Sidebar({ active = 'Виджеты' }) {
  const items = [['Дашборд'], ['Донаты'], ['Виджеты', { dot: true }], ['Алерты'], ['Статистика'], ['Выплаты', { counter: '0%' }], ['Партнёры'], ['Поддержка'], ['Интеграции', { badge: 'Новое' }]];
  return (
    <aside className="sb">
      <div className="sb__balance">
        <span>Баланс</span>
        <b>₽ 0<small>.00</small></b>
        <Button>Вывести</Button>
      </div>
      <nav>
        {items.map(([label, extra]) => (
          <NavItem key={label} label={label} state={label === active ? 'active' : 'default'} icon={label === 'Виджеты' ? undefined : ph} {...extra} />
        ))}
      </nav>
    </aside>
  );
}
