import './Alert.css';
export function Alert({ status = 'error', title, children }) {
  return (
    <div className={`ds-alert ds-alert--${status}`} role="alert">
      <span className="ds-alert__dot" />
      <div><b>{title}</b><p>{children}</p></div>
    </div>
  );
}
