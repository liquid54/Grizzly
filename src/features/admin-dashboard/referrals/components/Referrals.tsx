import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import Overviews from '../../components/overview/Overviews';
import Table from '@/components/table/Table';
import { admin_data, admin_header } from '@/components/table/mockReferralsData';
import { Pages } from '@/constants/pages';
import ReferralsDropdown from './dropdown/ReferralsDropdown';
import CommonFilters from '@/components/Filters/CommonFilters';

const referralsData = [
    { title: 'Total requests', value: 1482, percentage: 12, progress: 22 },
    { title: 'Pending', value: 322, percentage: 10, progress: 77 },
    { title: 'Done today', value: 1482, percentage: 12, progress: 77 },
    { title: 'Failed', value: 5, percentage: -12, progress: 22 },
];

const Referrals = () => {
    return (
        <div className='w-full flex flex-grow flex-col gap-5 xs:rounded-2xl xs:border xs:border-white-200 lg:border-0 xs:p-[30px] lg:p-0'>
            <div className='w-full flex flex-col gap-4 md:gap-[10px] lg:gap-5'>
                <ThemedText
                    type='title_poppins'
                    className='text-[24px] lg:text-[34px] leading-none'
                >
                    Withdrawal requests
                </ThemedText>

                {/* filters */}
                <CommonFilters
                    filters={[
                        'Status',
                        'Application date',
                        'Date of disbursement',
                        'Sort by',
                    ]}
                />
            </div>

            <Overviews data={referralsData} />

            {/* table */}
            <div className='mt-[10px]'>
                <Table
                    tableHeader={admin_header}
                    data={admin_data}
                    gridTemplateColumns='grid-cols-[130px_80px_50px_70px_80px_20px] slg:grid-cols-[300px_110px_70px_110px_110px_20px]'
                    firstRenderElementKeys={['referral', 'telegram']}
                    href={Pages.ADMIN_WITHDRAWAL}
                    settingsMenu={<ReferralsDropdown />}
                />
            </div>
        </div>
    );
};

export default Referrals;
