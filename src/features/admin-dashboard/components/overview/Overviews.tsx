import React from 'react';
import OverviewBox from './OverviewBox';

const Overviews = () => {
    return (
        <div className='grid grid-cols-2  md:grid-cols-4 gap-[14px] xl:gap-5'>
            <OverviewBox
                title='Total orders'
                value={1482}
                percentage={12}
                progress={77}
            />
            <OverviewBox
                title='Pending'
                value={322}
                percentage={10}
                progress={22}
            />
            <OverviewBox
                title='Done today'
                value={12}
                percentage={12}
                progress={77}
            />
            <OverviewBox
                title='Failed'
                value={5}
                percentage={-12}
                progress={20}
            />
        </div>
    );
};

export default Overviews;
