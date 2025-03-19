import Box from '@/components/Box';
import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import Percentage from './Percentage';
import ProgressBar from './ProgressBar';

interface OverviewProps {
    title: string;
    value: number;
    percentage: number;
    progress: number;
}
const OverviewBox = ({ title, value, percentage, progress }: OverviewProps) => {
    return (
        <div className='w-full max-w-[415px] gap-[5px] grid grid-cols-1 slg:gap-x-2 slg:grid-cols-[1fr_auto] slg:grid-rows-2 p-3 xl:p-5 rounded-xl lg:rounded-2xl border border-white-200'>
            <ThemedText
                type='admin-subtitle'
                className='text-brown-100 break-all'
            >
                {title}
            </ThemedText>

            <div className='slg:row-span-2 flex justify-start slg:justify-end items-center slg:place-self-center min-[1500px]:pr-[14px]'>
                <ProgressBar progress={progress} />
            </div>

            <Box className='pt-[11px] slg:pt-0 gap-x-[5px] xl:gap-x-4 flex-wrap '>
                <ThemedText
                    type='admin-subtitle-bold'
                    className='text-blue-100'
                >
                    {value}
                </ThemedText>
                <Percentage value={percentage} />
            </Box>
        </div>
    );
};

export default OverviewBox;
