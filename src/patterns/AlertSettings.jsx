import { useState } from 'react';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Toggle } from '../components/Toggle';
import { Checkbox } from '../components/Checkbox';
import { Button } from '../components/Button';
import { Alert } from '../components/Alert';
import './AlertSettings.css';

export function AlertSettings() {
  const [on, setOn] = useState(true);
  const [min, setMin] = useState('50');
  const bad = min !== '' && Number(min) < 10;
  const [saving, setSaving] = useState(false);
  return (
    <Card title="Алерты о донатах">
      <div className="as">
        <div className="as__row"><span>Показывать алерты</span><Toggle checked={on} onChange={setOn} /></div>
        <label className="as__field">Минимальная сумма, ₽
          <Input value={min} error={bad} disabled={!on} onChange={(e) => setMin(e.target.value)} />
        </label>
        {bad && <Alert status="warning" title="Слишком маленькая сумма">Минимум для алерта — 10 ₽</Alert>}
        <Checkbox label="Показывать сообщение донатера" defaultChecked disabled={!on} />
        <Checkbox label="Озвучивать сообщение" disabled={!on} />
        <Button loading={saving} disabled={bad || !on} onClick={() => { setSaving(true); setTimeout(() => setSaving(false), 1200); }}>Сохранить</Button>
      </div>
    </Card>
  );
}
