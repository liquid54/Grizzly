import { ThemedText } from '@/components/ThemedText';
import React from 'react';

import Arrow from '../../../../../public/icons/arrow.svg';

interface PercentageProps {
    value: number;
}

const Percentage = ({ value }: PercentageProps) => {
    const isPositive = value > 0;
    return (
        <div
            className={`flex items-center gap-2 px-2 py-[1px] xl:px-[14px] xl:py-[3px] rounded-[90px] ${isPositive ? 'bg-blue-50' : 'bg-red-100/5'}`}
        >
            <Arrow
                width={9}
                height={12}
                className={`${isPositive ? 'text-blue-100' : 'text-red-100 rotate-180'}`}
            />
            <ThemedText
                type='admin-text-small'
                className={`${isPositive ? 'text-blue-100' : 'text-red-100'}`}
            >
                {value}%
            </ThemedText>
        </div>
    );
};

export default Percentage;
