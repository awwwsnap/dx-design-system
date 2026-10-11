import './Input.css';

export function Input({ error = false, disabled = false, focused = false, ...rest }) {
  return <input className={`ds-input${error ? ' is-error' : ''}${focused ? ' is-focus' : ''}`} disabled={disabled} aria-invalid={error || undefined} {...rest} />;
}
