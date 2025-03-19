import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import { data, header } from '@/components/table/mockTransactionsData';
import Table from '@/components/table/Table';
import { Pages } from '@/constants/pages';
import CommonFilters from '@/components/Filters/CommonFilters';

const Transactions = () => {
    return (
        <div className='w-full flex flex-col flex-grow gap-[30px] xs:rounded-2xl xs:border xs:border-white-200 lg:border-0 xs:p-[30px] lg:p-0'>
            <div className='w-full flex flex-col gap-4 md:gap-[10px] lg:gap-5'>
                <ThemedText
                    type='title_poppins'
                    className='text-[24px] lg:text-[34px] leading-none'
                >
                    Transactions
                </ThemedText>

                {/* filters */}
                <CommonFilters
                    filters={[
                        'Transfer currency',
                        'Recipient currency',
                        'Wallet type',
                        'Status',
                    ]}
                />
            </div>

            <Table
                tableHeader={header}
                indexMobileDismiss={[6]}
                data={data}
                gridTemplateColumns='grid-cols-[135px_70px_50px_80px_120px_180px_70px] llg:grid-cols-[175px_90px_65px_120px_175px_230px_105px]'
                firstRenderElementKeys={['currency', 'status']}
                href={Pages.USER_PANEL_TRANSACTION}
            />
        </div>
    );
};

export default Transactions;
