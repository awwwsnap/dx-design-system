import './Foundations.css';

export default { title: 'Foundations', parameters: { layout: 'fullscreen' } };

const groups = [
  ['Поверхности', [
    ['bg-base', '#0A0A0A'], ['bg-panel', '#111111'], ['bg-card', '#1A1A1A'], ['bg-floating', '#202020'],
    ['bg-hover', '#242424'], ['bg-active', '#2E2E2E'], ['border-surface', '#232323'], ['border-interactive', '#3A3A3A · 50%'],
  ]],
  ['Текст', [
    ['content-primary', '#F5F5F7'], ['content-secondary', '#B3B3B3'], ['content-tertiary', '#8A8A8A'], ['content-disabled', '#595959'],
  ]],
  ['Бренд', [
    ['brand-default', '#8F42FF'], ['brand-hover', '#A066FF'], ['brand-pressed', '#6F2ED6'], ['border-focus', '#8F42FF · 50%'],
  ]],
  ['Статусы', [
    ['status-error', '#FF383C'], ['status-favorite', '#FF4D5E'], ['status-caution', '#F59E0B'], ['status-warning', '#FACC15'],
  ]],
];

export const Colors = {
  render: () => (
    <div className="f">
      <h2>Цвета</h2>
      <p className="sub">Смысловые токены слоя 1.1 поверх палитры 03</p>
      {groups.map(([title, items]) => (
        <section key={title}>
          <h3>{title}</h3>
          <div className="grid">
            {items.map(([name, hex]) => (
              <div className="sw" key={name}>
                <i style={{ background: `var(--${name.startsWith('status') ? name : name})` }} />
                <div><b>{name}</b><span>{hex}</span></div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  ),
};

const roles = [
  ['Display', 'display', 'Донаты за неделю'],
  ['Headline', 'headline', 'Настройка алертов'],
  ['Body', 'body', 'Сообщение появится на экране стрима сразу после оплаты'],
  ['Label', 'label', 'Минимальная сумма'],
];

export const Typography = {
  render: () => (
    <div className="f">
      <h2>Типографика</h2>
      <p className="sub">Четыре роли слоя 01: размер и вес задаются один раз</p>
      {roles.map(([name, key, sample]) => (
        <div className="row" key={key}>
          <b>{name}</b>
          <span style={{ font: `var(--${key}-weight) var(--${key}-size)/var(--${key}-line) var(--font-family)` }}>{sample}</span>
          <code>--{key}-size · --{key}-weight</code>
        </div>
      ))}
    </div>
  ),
};

export const RadiusAndSpaces = {
  name: 'Radius и Spaces',
  render: () => (
    <div className="f">
      <h2>Радиусы и отступы</h2>
      <p className="sub">Слой 02: шкала поверх базового шага 4 px</p>
      <h3>Радиусы</h3>
      <div className="rads">
        {['s', 'm', 'l', 'full'].map((k) => (
          <div key={k}><span className="rad" style={{ borderRadius: `var(--radius-${k})`, display: 'block' }} />--radius-{k}</div>
        ))}
      </div>
      <h3>Отступы</h3>
      {['xs', 's', 'm', 'l', 'xl'].map((key) => (
        <div className="bar" key={key}>
          <code style={{ width: 90 }}>--space-{key}</code>
          <i style={{ width: `var(--space-${key})` }} />
        </div>
      ))}
    </div>
  ),
};
