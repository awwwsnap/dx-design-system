import './Card.css';
export function Card({ title, children, interactive = false }) {
  return (
    <section className={`ds-card${interactive ? ' is-interactive' : ''}`}>
      {title && <h4 className="ds-card__title">{title}</h4>}
      <div className="ds-card__body">{children}</div>
    </section>
  );
}
