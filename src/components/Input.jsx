import './Input.css';

export function Input({ error = false, disabled = false, ...rest }) {
  return <input className={`ds-input${error ? ' is-error' : ''}`} disabled={disabled} aria-invalid={error || undefined} {...rest} />;
}
