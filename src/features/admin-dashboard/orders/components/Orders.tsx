import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import Overviews from '../../components/overview/Overviews';
import Table from '@/components/table/Table';
import { data, header } from '@/components/table/mockTransactionsData';
import { Pages } from '@/constants/pages';
import OrdersDropdown from './OrdersDropdown';
import CommonFilters from '@/components/Filters/CommonFilters';

const overviewData = [
    { title: 'Total orders', value: 1482, percentage: 12, progress: 22 },
    { title: 'Pending', value: 322, percentage: 10, progress: 77 },
    { title: 'Done today', value: 1482, percentage: 12, progress: 77 },
    { title: 'Failed', value: 5, percentage: -12, progress: 22 },
];

const Orders = () => {
    return (
        <div className='w-full flex flex-grow flex-col gap-5 xs:rounded-2xl xs:border xs:border-white-200 lg:border-0 xs:p-[30px] lg:p-0'>
            <div className='w-full flex flex-col gap-4 md:gap-[10px] lg:gap-5'>
                <ThemedText
                    type='title_poppins'
                    className='text-[24px] lg:text-[34px] leading-none'
                >
                    Orders
                </ThemedText>

                {/* filters */}
                <CommonFilters
                    filters={['Status', 'Date', 'Amount', 'Currency type']}
                />
            </div>

            <Overviews data={overviewData} />

            {/* table */}
            <div className='mt-[10px]'>
                <Table
                    tableHeader={header}
                    data={data}
                    gridTemplateColumns='grid-cols-[135px_70px_50px_80px_120px_180px_70px_40px] llg:grid-cols-[175px_90px_65px_120px_175px_230px_105px_50px]'
                    firstRenderElementKeys={['currency', 'status']}
                    href={Pages.ADMIN_TRANSACTION}
                    settingsMenu={<OrdersDropdown />}
                />
            </div>
        </div>
    );
};

export default Orders;
