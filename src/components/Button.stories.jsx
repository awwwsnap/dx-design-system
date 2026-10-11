import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Отправить донат', variant: 'primary', disabled: false, loading: false },
  argTypes: { variant: { control: 'inline-radio', options: ['primary', 'secondary'] } },
};

export const Default = {};
export const Secondary = { args: { variant: 'secondary', children: 'Отмена' } };
export const Disabled = { args: { disabled: true } };
export const Loading = { args: { loading: true } };
