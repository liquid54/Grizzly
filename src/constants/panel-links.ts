import {Pages} from '@/constants/pages';

export const USER_MENU_LINKS = [
    {
        label: 'Main',
        href: Pages.USER_PANEL_MAIN,
        src: '/icons/user-panel/main.svg',
        activeSrc: '/icons/user-panel/mainActive.svg',
        width: 20,
        height: 20,
    },
    {
        label: 'Transactions',
        href: Pages.USER_PANEL_TRANSACTIONS,
        src: '/icons/user-panel/transaction.svg',
        activeSrc: '/icons/user-panel/transactionActive.svg',
        width: 18,
        height: 18,
    },
    {
        label: 'Exchange',
        href: Pages.USER_PANEL_EXCHANGE,
        src: '/icons/user-panel/exchange.svg',
        activeSrc: '/icons/user-panel/exchangeActive.svg',
        width: 19.7,
        height: 14.8,
    },
    {
        label: 'Referrals',
        href: Pages.USER_PANEL_REFERRALS,
        src: '/icons/user-panel/referral.svg',
        activeSrc: '/icons/user-panel/referralActive.svg',
        width: 19.2,
        height: 19.2,
    },
    {
        label: 'Settings',
        href: Pages.USER_PANEL_SETTINGS,
        src: '/icons/user-panel/settings.svg',
        activeSrc: '/icons/user-panel/settingsActive.svg',
        width: 18.3,
        height: 18.3,
    },
];

export const MAIN_MENU_LINKS = [
    {label: 'Main',
    href: Pages.HOME,
},
{
    label: 'Transactions',
    href: Pages.ABOUT,
},
{
    label: 'Exchange',
    href: Pages.FAQ,
}
]
