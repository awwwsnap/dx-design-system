import iconActive from '../assets/icon-widgets-active.svg';
import iconDefault from '../assets/icon-widgets-default.svg';
import './NavItem.css';

export function NavItem({ label = 'Виджеты', active = false, dot = false, counter, badge, icon, iconOn }) {
  return (
    <button className={`nav-item${active ? ' is-active' : ''}`}>
      <span className="nav-item__icon">
        <img src={icon ?? iconDefault} alt="" />
        <img className="on" src={iconOn ?? iconActive} alt="" />
        {dot && <i className="nav-item__dot" />}
      </span>
      <span className="nav-item__label">{label}</span>
      {counter !== undefined && <span className="nav-item__counter">{counter}</span>}
      {badge && <span className="nav-item__badge">{badge}</span>}
    </button>
  );
}
