import { Button } from '../components/Button';
import { Input } from '../components/Input';
import './Patterns.css';

export function EmptyState({ title = 'Пока нет донатов', text = 'Здесь появятся донаты, когда зрители начнут поддерживать стрим', action = 'Скопировать ссылку' }) {
  return (
    <div className="pt pt-empty">
      <span className="pt-empty__icon">♡</span>
      <h4>{title}</h4>
      <p>{text}</p>
      {action && <Button variant="secondary">{action}</Button>}
    </div>
  );
}

export function Skeleton() {
  return <div className="pt pt-skel" aria-busy="true"><i /><i /><i /></div>;
}

export function Search({ query = '', results = [] }) {
  return (
    <div className="pt pt-search">
      <Input defaultValue={query} placeholder="Поиск донатов" />
      {query && (results.length ? <ul>{results.map((r) => <li key={r}>{r}</li>)}</ul> : <EmptyState title="Ничего не найдено" text="Попробуйте изменить запрос" action={null} />)}
    </div>
  );
}

export function PageHeader({ title = 'Донаты', subtitle = 'История поддержки за последние 30 дней', action = 'Экспорт' }) {
  return (
    <div className="pt-head">
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div className="pt-head__act"><Button variant="secondary">{action}</Button></div>
    </div>
  );
}
