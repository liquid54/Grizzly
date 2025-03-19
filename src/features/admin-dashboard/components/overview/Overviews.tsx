import React from 'react';
import OverviewBox from './OverviewBox';
import type { OverviewData } from '@/types/main';

interface OverviewProps {
    data: OverviewData[];
}

const Overviews = ({ data }: OverviewProps) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-[14px] xl:gap-5'>
            {data?.map((d, i) => {
                return <OverviewBox key={`${d.title}-${i}`} {...d} />;
            })}
        </div>
    );
};

export default Overviews;
