import { Toggle } from './Toggle';

export default { title: 'Components/Toggle', component: Toggle, args: { disabled: false } };

export const Off = {};
export const On = { args: { defaultChecked: true } };
export const Disabled = { args: { disabled: true } };
