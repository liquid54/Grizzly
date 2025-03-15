import { ThemedText } from '@/components/ThemedText';
import Currency from './Currency';

export const header = [
    'Currency',
    'Date',
    'Amount',
    'Exchange rate',
    'Recipient details',
    'Payment method',
    'Status',
];

export const data = [
    {
        currency: <Currency />,
        date: '12.01.2025',
        amount: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-brown-100'
            >
                500
            </ThemedText>
        ),
        rate: 42.55,
        recipient: '4149 **** **** 4523',
        payment: 'TQpB4***********7k2N9Xm',
        status: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-blue-100'
            >
                Done
            </ThemedText>
        ),
    },
    {
        currency: <Currency />,
        date: '12.01.2025',
        amount: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-brown-100'
            >
                500
            </ThemedText>
        ),
        rate: 42.55,
        recipient: '4149 **** **** 4523',
        payment: 'TQpB4***********7k2N9Xm',
        status: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-blue-100'
            >
                Done
            </ThemedText>
        ),
    },
    {
        currency: <Currency />,
        date: '12.01.2025',
        amount: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-brown-100'
            >
                500
            </ThemedText>
        ),
        rate: 42.55,
        recipient: '4149 **** **** 4523',
        payment: 'TQpB4***********7k2N9Xm',
        status: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-blue-100'
            >
                Done
            </ThemedText>
        ),
    },
    {
        currency: <Currency />,
        date: '12.01.2025',
        amount: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-brown-100'
            >
                500
            </ThemedText>
        ),
        rate: 42.55,
        recipient: '4149 **** **** 4523',
        payment: 'TQpB4***********7k2N9Xm',
        status: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-blue-100'
            >
                Done
            </ThemedText>
        ),
    },
    {
        currency: <Currency />,
        date: '12.01.2025',
        amount: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-brown-100'
            >
                500
            </ThemedText>
        ),
        rate: 42.55,
        recipient: '4149 **** **** 4523',
        payment: 'TQpB4***********7k2N9Xm',
        status: (
            <ThemedText
                type='panel-table-header'
                className='font-semibold text-blue-100'
            >
                Done
            </ThemedText>
        ),
    },
];
