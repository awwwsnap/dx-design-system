import { Fragment, useEffect, useMemo, useState } from 'react';
import base from '../tokens/00-base.css?raw';
import typo from '../tokens/01-typography.css?raw';
import radius from '../tokens/02-radius-spaces.css?raw';
import palette from '../tokens/03-palette.css?raw';
import color from '../tokens/11-color.css?raw';
import comp from '../tokens/12-component-color.css?raw';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Toggle } from '../components/Toggle';
import { Checkbox } from '../components/Checkbox';
import { NavItem } from '../components/NavItem';
import './Foundations.css';
import './Tokens.css';

export default { title: 'Foundations', parameters: { layout: 'fullscreen' } };

const LAYERS = [
  { id: '00', name: 'base', note: 'сырые числа', css: base },
  { id: '01', name: 'typography', note: 'роли текста', css: typo },
  { id: '02', name: 'radius · spaces', note: 'шкалы', css: radius },
  { id: '03', name: 'palette', note: 'только цвета', css: palette },
  { id: '1.1', name: 'color', note: 'смысл', css: color },
  { id: '1.2', name: 'component color', note: 'компоненты', css: comp },
];

// Парсим токены прямо из CSS-файлов: страница всегда совпадает с кодом
const TOKENS = {};
LAYERS.forEach((l) => {
  for (const m of l.css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) TOKENS[m[1]] = { layer: l.id, value: m[2].trim() };
});

function chain(name) {
  const out = [];
  let cur = name;
  const seen = new Set();
  while (cur && TOKENS[cur] && !seen.has(cur)) {
    seen.add(cur);
    const t = TOKENS[cur];
    out.push({ name: cur, layer: t.layer, value: t.value });
    const ref = t.value.match(/var\((--[\w-]+)\)/);
    cur = ref ? ref[1] : null;
  }
  return out;
}

const CHAINS = ['--button-primary-bg-hover', '--input-border-focus', '--nav-item-glow', '--toggle-track-on', '--nav-item-bg-hover'];
const PRESETS = ['#8F42FF', '#3B82F6', '#22C55E', '#F97316', '#EC4899'];

export const Tokens = {
  name: 'Токены',
  render: () => {
    const [c, setC] = useState('#8F42FF');
    useEffect(() => {
      const r = document.documentElement.style;
      if (c.toLowerCase() === '#8f42ff') {
        ['--brand-500', '--brand-400', '--brand-600'].forEach((k) => r.removeProperty(k));
      } else {
        r.setProperty('--brand-500', c);
        r.setProperty('--brand-400', `color-mix(in srgb, ${c} 75%, white)`);
        r.setProperty('--brand-600', `color-mix(in srgb, ${c} 80%, black)`);
      }
      return () => ['--brand-500', '--brand-400', '--brand-600'].forEach((k) => r.removeProperty(k));
    }, [c]);

    const counts = useMemo(() => LAYERS.map((l) => Object.values(TOKENS).filter((t) => t.layer === l.id).length), []);

    return (
      <div className="tk">
        <h2>Токены</h2>
        <p className="sub">Шесть слоёв: каждый ссылается только на предыдущий</p>

        <h3>Слои</h3>
        <p className="hint">Сверху вниз по зависимости. Количество токенов считается из файлов в <code>src/tokens</code>.</p>
        <div className="tk-layers">
          {LAYERS.map((l, i) => (
            <Fragment key={l.id}>
              <div className="tk-layer"><b>{l.id} {l.name}</b><span>{l.note}</span><em>{counts[i]}</em></div>
              {i < LAYERS.length - 1 && <span className="tk-arrow">→</span>}
            </Fragment>
          ))}
        </div>

        <h3>От компонента до цвета</h3>
        <p className="hint">Путь токена через слои. Его значение нигде не задано дважды: компонент ссылается на смысл, смысл на палитру.</p>
        {CHAINS.map((n) => {
          const ch = chain(n);
          return (
            <div className="tk-chain" key={n}>
              {ch.map((s, i) => (
                <Fragment key={s.name}>
                  <div className={`tk-node${i === ch.length - 1 ? ' leaf' : ''}`}>
                    <small>{s.layer}</small>{s.name}
                    {i === ch.length - 1 && <>{/^#/.test(s.value) && <i style={{ background: `var(${s.name})` }} />}<span style={{ color: 'var(--content-tertiary)' }}>{s.name === '--brand-500' ? c.toUpperCase() : s.name === '--brand-400' && c.toLowerCase() !== '#8f42ff' ? 'светлее от brand-500' : s.value.length > 28 ? 'color-mix · 50%' : s.value}</span></>}
                  </div>
                  {i < ch.length - 1 && <span className="tk-arrow">→</span>}
                </Fragment>
              ))}
            </div>
          );
        })}

        <h3>Поменяй бренд-цвет в палитре</h3>
        <p className="hint">Меняется одна запись, <code>--brand-500</code> в слое 03. Всё остальное ссылается на неё.</p>
        <div className="tk-demo">
          <div className="tk-ctl">
            <label>Пресеты</label>
            <div className="pal">{PRESETS.map((p) => <button key={p} className={c.toLowerCase() === p.toLowerCase() ? 'on' : ''} style={{ background: p }} onClick={() => setC(p)} aria-label={p} />)}</div>
            <label>Свой цвет</label>
            <input type="color" value={c} onChange={(e) => setC(e.target.value)} />
            <code>--brand-500: {c.toUpperCase()}</code>
            <button className="reset" onClick={() => setC('#8F42FF')}>Вернуть исходный</button>
          </div>
          <div className="tk-stage">
            <div><h4>Кнопка</h4><div className="line"><Button>Обычная</Button><Button forceState="hover">Наведение</Button><Button forceState="pressed">Нажатие</Button></div></div>
            <div><h4>Фокус</h4><div className="line"><Input focused placeholder="Скример 500 руб." /></div></div>
            <div><h4>Тумблер и чекбокс</h4><div className="line"><Toggle defaultChecked /><Checkbox label="Показывать сообщение" defaultChecked /></div></div>
            <div><h4>Пункт меню</h4><div className="line"><NavItem state="active" dot counter="0%" /></div></div>
          </div>
        </div>
      </div>
    );
  },
};
