import { useState } from 'react';
import './Checkbox.css';
export function Checkbox({ label, defaultChecked = false, disabled = false }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <label className={`ds-checkbox${disabled ? ' is-disabled' : ''}`}>
      <input type="checkbox" checked={on} disabled={disabled} onChange={() => setOn(!on)} />
      <span className="ds-checkbox__box"><svg viewBox="0 0 12 12" width="12" height="12"><path d="M2.5 6.2l2.4 2.3 4.6-4.9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></span>
      <span>{label}</span>
    </label>
  );
}
