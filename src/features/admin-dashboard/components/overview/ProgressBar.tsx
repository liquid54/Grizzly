import { ThemedText } from '@/components/ThemedText';
import React from 'react';

const ProgressBar = ({ progress }: { progress: number }) => {
    const strokeWidth = 6; // можна змінювати на більше значення
    const radius = 18 - strokeWidth / 2; // коригуємо радіус
    const circumference = 2 * Math.PI * radius; // довжина кола
    const strokeDashoffset = circumference * (1 - progress / 100);

    return (
        <div className='relative size-[68px] min-[1500px]:size-[90px]'>
            <svg
                className='size-full -rotate-90'
                viewBox='0 0 36 36'
                xmlns='http://www.w3.org/2000/svg'
            >
                <circle
                    cx='18'
                    cy='18'
                    r={radius}
                    fill='none'
                    stroke='currentColor'
                    className='text-blue-100'
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                ></circle>
            </svg>

            <div className='absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                <ThemedText type='admin-progress' className='text-brown-100'>
                    {progress}%
                </ThemedText>
            </div>
        </div>
    );
};

export default ProgressBar;
