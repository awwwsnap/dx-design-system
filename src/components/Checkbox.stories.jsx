import { Checkbox } from './Checkbox';
export default { title: 'Components/Checkbox', component: Checkbox, args: { label: 'Показывать сообщение донатера', disabled: false } };
export const Unchecked = {};
export const Checked = { args: { defaultChecked: true } };
export const Disabled = { args: { disabled: true } };
