import { AlertSettings } from './AlertSettings';
import './Patterns.css';

export default { title: 'Patterns/Настройка алертов', parameters: { layout: 'fullscreen' } };

const parts = [
  ['Card', 'bg-card · radius-l'],
  ['Toggle', 'toggle-track-on'],
  ['Input', 'input-border-focus'],
  ['Alert', 'status-warning'],
  ['Checkbox', 'brand-default'],
  ['Button', 'button-primary-bg'],
];

export const Anatomy = {
  name: 'В разборке',
  render: () => (
    <div className="dis">
      <div className="frame"><AlertSettings /></div>
      <ul>
        {parts.map(([n, t]) => <li key={n}><b>{n}</b><code>{t}</code></li>)}
      </ul>
    </div>
  ),
};
