# dx-design-system

Storybook дизайн-системы Donate: токены (6 слоёв) и компоненты Button, Input, Toggle с живыми состояниями.

```
npm i
npm run storybook        # http://localhost:6006
npm run build-storybook
```

Токены лежат в `src/tokens`, каждый слой ссылается только на предыдущий:
00-base → 01-typography → 02-radius-spaces → 03-palette → 11-color → 12-component-color.
