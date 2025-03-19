import Box from '@/components/Box';
import Button from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import CustomSelect from '@/components/ui/select';
import React from 'react';
import Overviews from '../../components/overview/Overviews';
import Table from '@/components/table/Table';
import { data, header } from '@/components/table/mockTransactionsData';
import { Pages } from '@/constants/pages';
import OrdersDropdown from '../../components/dropdown/OrdersDropdown';

const Orders = () => {
    return (
        <div className='w-full flex flex-col gap-5 xs:rounded-2xl xs:border xs:border-white-200 lg:border-0 xs:p-[30px] lg:p-0'>
            <div className='w-full flex flex-col gap-4 md:gap-[10px] lg:gap-5'>
                <ThemedText
                    type='title_poppins'
                    className='text-[24px] lg:text-[34px] leading-none'
                >
                    Orders
                </ThemedText>

                {/* filters */}
                <Box className='gap-5 min-[1020px]:gap-4 items-center flex-col min-[1020px]:flex-row flex-wrap'>
                    <Box className='gap-4 items-center'>
                        <div className='w-[134px] min-[390px]:w-[169px] sm:w-[195px]'>
                            <CustomSelect title='Status' />
                        </div>
                        <div className='w-[134px] min-[390px]:w-[169px] sm:w-[195px]'>
                            <CustomSelect title='Date' />
                        </div>
                    </Box>
                    <Box className='gap-4 items-center'>
                        <div className='w-[134px] min-[390px]:w-[169px] sm:w-[195px]'>
                            <CustomSelect title='Amount' />
                        </div>
                        <div className='w-[134px] min-[390px]:w-[169px] sm:w-[195px]'>
                            <CustomSelect title='Currency type' />
                        </div>
                    </Box>
                    <Button
                        variant='text'
                        size='text'
                        className='min-[1020px]:mt-[21px]'
                    >
                        Reset
                    </Button>
                </Box>
            </div>

            <Overviews />

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
