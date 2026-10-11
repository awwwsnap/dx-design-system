import { useState } from 'react';
import './Toggle.css';

export function Toggle({ checked, defaultChecked = false, disabled = false, onChange }) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked ?? inner;
  return (
    <button type="button" role="switch" aria-checked={on} disabled={disabled} className={`ds-toggle${on ? ' is-on' : ''}`}
      onClick={() => { setInner(!on); onChange?.(!on); }}>
      <span className="ds-toggle__thumb" />
    </button>
  );
}
