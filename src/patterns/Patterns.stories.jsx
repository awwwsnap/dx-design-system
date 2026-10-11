import { EmptyState, Skeleton, Search, PageHeader } from './Patterns';

export default { title: 'Patterns/Базовые паттерны' };

export const Empty = { name: 'Пустое состояние', render: (a) => <EmptyState {...a} /> };
export const Loading = { name: 'Скелетон загрузки', render: () => <Skeleton /> };
export const SearchTyping = { name: 'Поиск: результаты', render: () => <Search query="скр" results={['Скример — 500 ₽', 'Скрипач — 150 ₽', 'Скромный — 50 ₽']} /> };
export const SearchEmpty = { name: 'Поиск: пусто', render: () => <Search query="ыыы" /> };
export const Header = { name: 'Шаблон заголовка', parameters: { layout: 'padded' }, render: (a) => <PageHeader {...a} /> };
