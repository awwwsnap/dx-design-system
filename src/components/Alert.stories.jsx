import { Alert } from './Alert';
export default { title: 'Components/Alert', component: Alert, args: { status: 'error', title: 'Платёж не прошёл', children: 'Проверьте данные карты и попробуйте ещё раз' }, argTypes: { status: { control: 'inline-radio', options: ['error', 'caution', 'warning', 'favorite'] } } };
export const Error = {};
export const Caution = { args: { status: 'caution', title: 'Алерт не подключён', children: 'Добавьте ссылку в OBS, иначе донаты не появятся на стриме' } };
export const Warning = { args: { status: 'warning', title: 'Сумма ниже минимальной', children: 'Минимальный донат — 50 ₽' } };
export const Favorite = { args: { status: 'favorite', title: 'Новый донат', children: 'Скример отправил 500 ₽' } };
