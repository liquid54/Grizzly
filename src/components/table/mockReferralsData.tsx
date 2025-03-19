import { ThemedText } from '@/components/ThemedText';
import Status from '../Status';
import { REFERRAL_WITHDRAWAL_STATUS } from '@/constants';

export const header = [
    'Referrals info',
    'ID',
    'Telegram',
    'Date added',
    'Total Exchanges',
    'Total profit',
];

export const admin_header = ['User info', 'Date', 'Time', 'Amount', 'Status'];

export const data = [
    {
        referral: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-brown-100 sm:text-blue-100 lg:text-brown-100'
            >
                Maxim V.
            </ThemedText>
        ),
        ID: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold  lg:font-normal text-brown-100'
            >
                #62998021
            </ThemedText>
        ),
        telegram: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-blue-100 sm:text-brown-100'
            >
                @someuser123
            </ThemedText>
        ),
        'date added': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-brown-100'
            >
                12.01.2025
            </ThemedText>
        ),
        'total exchanges': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-brown-100'
            >
                10
            </ThemedText>
        ),
        'total profit': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-blue-100'
            >
                120$
            </ThemedText>
        ),
    },
    {
        referral: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-brown-100 sm:text-blue-100 lg:text-brown-100'
            >
                Maxim V.
            </ThemedText>
        ),
        ID: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold  lg:font-normal text-brown-100'
            >
                #62998021
            </ThemedText>
        ),
        telegram: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-blue-100 sm:text-brown-100'
            >
                @someuser123
            </ThemedText>
        ),
        'date added': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-brown-100'
            >
                12.01.2025
            </ThemedText>
        ),
        'total exchanges': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-brown-100'
            >
                10
            </ThemedText>
        ),
        'total profit': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-blue-100'
            >
                120$
            </ThemedText>
        ),
    },
    {
        referral: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-brown-100 sm:text-blue-100 lg:text-brown-100'
            >
                Maxim V.
            </ThemedText>
        ),
        ID: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold  lg:font-normal text-brown-100'
            >
                #62998021
            </ThemedText>
        ),
        telegram: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-blue-100 sm:text-brown-100'
            >
                @someuser123
            </ThemedText>
        ),
        'date added': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-brown-100'
            >
                12.01.2025
            </ThemedText>
        ),
        'total exchanges': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-brown-100'
            >
                10
            </ThemedText>
        ),
        'total profit': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-blue-100'
            >
                120$
            </ThemedText>
        ),
    },
    {
        referral: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-brown-100 sm:text-blue-100 lg:text-brown-100'
            >
                Maxim V.
            </ThemedText>
        ),
        ID: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold  lg:font-normal text-brown-100'
            >
                #62998021
            </ThemedText>
        ),
        telegram: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-blue-100 sm:text-brown-100'
            >
                @someuser123
            </ThemedText>
        ),
        'date added': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-brown-100'
            >
                12.01.2025
            </ThemedText>
        ),
        'total exchanges': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-brown-100'
            >
                10
            </ThemedText>
        ),
        'total profit': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-blue-100'
            >
                120$
            </ThemedText>
        ),
    },

    {
        referral: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-brown-100 sm:text-blue-100 lg:text-brown-100'
            >
                Maxim V.
            </ThemedText>
        ),
        ID: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold  lg:font-normal text-brown-100'
            >
                #62998021
            </ThemedText>
        ),
        telegram: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-blue-100 sm:text-brown-100'
            >
                @someuser123
            </ThemedText>
        ),
        'date added': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-brown-100'
            >
                12.01.2025
            </ThemedText>
        ),
        'total exchanges': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-normal text-brown-100'
            >
                10
            </ThemedText>
        ),
        'total profit': (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-blue-100'
            >
                120$
            </ThemedText>
        ),
    },
];

export const admin_data = [
    {
        referral: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-bold text-brown-100'
            >
                Maxim V.
            </ThemedText>
        ),
        date: (
            <ThemedText
                type='panel-table-header'
                className='font-medium  sm:font-normal text-brown-100'
            >
                12.01.2025
            </ThemedText>
        ),
        time: (
            <ThemedText
                type='panel-table-header'
                className='font-medium sm:font-normal text-brown-100'
            >
                13:21
            </ThemedText>
        ),
        amount: (
            <ThemedText
                type='panel-table-header'
                className='font-bold text-brown-100'
            >
                558 USD
            </ThemedText>
        ),
        status: <Status status={REFERRAL_WITHDRAWAL_STATUS.APPROVED} />,
    },
    {
        referral: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-bold text-brown-100'
            >
                Maxim V.
            </ThemedText>
        ),
        date: (
            <ThemedText
                type='panel-table-header'
                className='font-medium  sm:font-normal text-brown-100'
            >
                12.01.2025
            </ThemedText>
        ),
        time: (
            <ThemedText
                type='panel-table-header'
                className='font-medium sm:font-normal text-brown-100'
            >
                13:21
            </ThemedText>
        ),
        amount: (
            <ThemedText
                type='panel-table-header'
                className='font-bold text-brown-100'
            >
                558 USD
            </ThemedText>
        ),
        status: <Status status={REFERRAL_WITHDRAWAL_STATUS.PENDING} />,
    },
    {
        referral: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold sm:font-bold text-brown-100'
            >
                Maxim V.
            </ThemedText>
        ),
        date: (
            <ThemedText
                type='panel-table-header'
                className='font-medium  sm:font-normal text-brown-100'
            >
                12.01.2025
            </ThemedText>
        ),
        time: (
            <ThemedText
                type='panel-table-header'
                className='font-medium sm:font-normal text-brown-100'
            >
                13:21
            </ThemedText>
        ),
        amount: (
            <ThemedText
                type='panel-table-header'
                className='font-bold text-brown-100'
            >
                558 USD
            </ThemedText>
        ),
        status: <Status status={REFERRAL_WITHDRAWAL_STATUS.FAILED} />,
    },
];
