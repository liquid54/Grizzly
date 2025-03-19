import React from 'react';
import { ThemedText } from '../ThemedText';
import { cn } from '@/utils';
import { TRANSACTION_STATUS, REFERRAL_WITHDRAWAL_STATUS } from '@/constants';

interface StatusProps {
    className?: string;
    status: TRANSACTION_STATUS | REFERRAL_WITHDRAWAL_STATUS;
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

const statusColors: Record<
    TRANSACTION_STATUS | REFERRAL_WITHDRAWAL_STATUS,
    string
> = {
    [TRANSACTION_STATUS.DONE]: 'text-blue-100',
    [REFERRAL_WITHDRAWAL_STATUS.APPROVED]: 'text-blue-100',
    [TRANSACTION_STATUS.IN_PROGRESS]: 'text-yellow-100',
    [REFERRAL_WITHDRAWAL_STATUS.PENDING]: 'text-yellow-100',
    [TRANSACTION_STATUS.FAILED]: 'text-red-200',
};

const colorVariant = (
    status: TRANSACTION_STATUS | REFERRAL_WITHDRAWAL_STATUS,
): string => statusColors[status] || 'text-brown-100';
