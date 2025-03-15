'use client';
import UserOverview from './UserOverview';

const MainPanel = () => {
    return (
        <div className='flex flex-col w-full xs:rounded-2xl xs:border xs:border-gray-100 lg:border-0 xs:p-[30px] lg:p-0 gap-[30px] md:gap-[50px]'>
            <UserOverview />
        </div>
    );
};

export default MainPanel;
