import './Button.css';

export function Button({ variant = 'primary', loading = false, disabled = false, forceState, children, ...rest }) {
  return (
    <button className={`ds-button ds-button--${variant}${loading ? ' is-loading' : ''}${forceState ? ` is-${forceState}` : ''}`} disabled={disabled || loading} {...rest}>
      {loading && <span className="ds-button__spinner" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
