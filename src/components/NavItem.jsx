import iconDefault from '../assets/icons/widgets-default.svg';
import iconActive from '../assets/icons/widgets-active.svg';
import './NavItem.css';

/* state: 'default' | 'hover' | 'active' — hover и active показывают одинаковое свечение слева.
   Принудительный state нужен для витрины; в продукте hover приходит из :hover. */
export function NavItem({ label = 'Виджеты', state = 'default', dot = false, counter, badge, icon }) {
  const lit = state !== 'default';
  const src = icon ?? (lit ? iconActive : iconDefault);
  return (
    <a className={`ds-nav ds-nav--${state}`} href="#" onClick={(e) => e.preventDefault()}>
      <span className="ds-nav__glow" />
      <span className="ds-nav__icon">
        <img src={src} alt="" width="24" height="24" />
        {dot && <i className="ds-nav__dot" />}
      </span>
      <span className="ds-nav__label">{label}</span>
      {counter != null && <span className="ds-nav__counter">{counter}</span>}
      {badge && <span className="ds-nav__badge">{badge}</span>}
    </a>
  );
}
