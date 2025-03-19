import { Pages } from '@/constants/pages';

export const ADMIN_MENU_LINKS = [
    {
        label: 'Orders',
        href: Pages.ADMIN_TRANSACTIONS,
        src: '/icons/user-panel/transaction.svg',
        activeSrc: '/icons/user-panel/transactionActive.svg',
        width: 18,
        height: 18,
    },
    {
        label: 'Withdrawals',
        href: Pages.ADMIN_WITHDRAWALS,
        src: '/icons/user-panel/referral.svg',
        activeSrc: '/icons/user-panel/referralActive.svg',
        width: 19.2,
        height: 19.2,
    },
    {
        label: 'Users',
        href: Pages.ADMIN_USERS,
        src: '/icons/users.svg',
        activeSrc: '/icons/activeUsers.svg',
        width: 22,
        height: 22,
    },
    {
        label: 'Crypto',
        href: Pages.ADMIN_EXCHANGES,
        src: '/icons/user-panel/exchange.svg',
        activeSrc: '/icons/user-panel/exchangeActive.svg',
        width: 19.7,
        height: 14.8,
    },
    {
        label: 'Settings',
        href: Pages.ADMIN_SETTINGS,
        src: '/icons/user-panel/settings.svg',
        activeSrc: '/icons/user-panel/settingsActive.svg',
        width: 18.3,
        height: 18.3,
    },
];
