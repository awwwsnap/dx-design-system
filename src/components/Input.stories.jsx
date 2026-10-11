import { useState } from 'react';
import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  args: { placeholder: 'Скример 500 руб.', error: false, disabled: false },
};

export const Default = {};
export const Filled = { args: { defaultValue: 'Скример 500 руб.' } };
export const Disabled = { args: { disabled: true } };
export const Error = { args: { error: true, defaultValue: 'Скример 500 руб.' } };

// Живое взаимодействие: наведение и фокус работают прямо в сторис
export const Interactive = {
  render: (args) => {
    const [v, setV] = useState('');
    return <Input {...args} value={v} error={v.length > 0 && v.length < 3} onChange={(e) => setV(e.target.value)} />;
  },
};
