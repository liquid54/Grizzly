import React from 'react';
import { ThemedText } from '../ThemedText';
import { cn } from '@/utils';
import { TRANSACTION_STATUS } from '@/constants';

interface StatusProps {
    className?: string;
    status: TRANSACTION_STATUS;
}
const Status = ({ status, className }: StatusProps) => {
    return (
        <ThemedText
            type='panel-table-header'
            className={cn(`font-semibold ${colorVariant(status)}`, className)}
        >
            {status}
        </ThemedText>
    );
};

export default Status;

const colorVariant = (status: TRANSACTION_STATUS): string => {
    switch (status) {
        case TRANSACTION_STATUS.DONE:
            return 'text-blue-100';
        case TRANSACTION_STATUS.IN_PROGRESS:
            return 'text-yellow-100';
        case TRANSACTION_STATUS.FAILED:
            return 'text-red-200';
        default:
            return 'text-brown-100';
    }
};
