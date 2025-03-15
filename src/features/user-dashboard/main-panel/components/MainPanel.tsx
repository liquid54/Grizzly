'use client';
import UserOverview from './UserOverview';
import LastExchange from './LastExchange';
import ProfitableReferrals from './ProfitableReferrals';

const MainPanel = () => {
    return (
        <div className='flex flex-col w-full xs:rounded-2xl xs:border xs:border-white-200 lg:border-0 xs:p-[30px] lg:p-0 gap-[30px] md:gap-[50px]'>
            <UserOverview />
            <LastExchange />
            <ProfitableReferrals />
        </div>
    );
};

export default MainPanel;
