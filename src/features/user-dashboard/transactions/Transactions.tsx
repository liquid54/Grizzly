import Box from '@/components/Box';
import Button from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import CustomSelect from '@/components/ui/select';
import React from 'react';
import { data, header } from '../components/table/mockTransactionsData';
import Table from '../components/table/Table';

const Transactions = () => {
    return (
        <div className='w-full flex flex-col gap-[30px] xs:rounded-2xl xs:border xs:border-white-200 lg:border-0 xs:p-[30px] lg:p-0'>
            <div className='w-full flex flex-col gap-4 md:gap-[10px] lg:gap-5'>
                <ThemedText
                    type='title_poppins'
                    className='text-[24px] lg:text-[34px]'
                >
                    Transactions
                </ThemedText>

                {/* filters */}
                <Box className='gap-5 min-[1020px]:gap-4 items-center flex-col min-[1020px]:flex-row flex-wrap'>
                    <Box className='gap-4 items-center'>
                        <div className='w-[134px] min-[390px]:w-[169px] sm:w-[195px]'>
                            <CustomSelect title='Transfer currency' />
                        </div>
                        <div className='w-[134px] min-[390px]:w-[169px] sm:w-[195px]'>
                            <CustomSelect title='Recipient currency' />
                        </div>
                    </Box>
                    <Box className='gap-4 items-center'>
                        <div className='w-[134px] min-[390px]:w-[169px] sm:w-[195px]'>
                            <CustomSelect title='Wallet type' />
                        </div>
                        <div className='w-[134px] min-[390px]:w-[169px] sm:w-[195px]'>
                            <CustomSelect title='Status' />
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

            <Table
                tableHeader={header}
                indexMobileDismiss={[6]}
                data={data}
                gridTemplateColumns='135px 70px 50px 80px 120px 180px 50px'
                firstRenderElementKeys={['currency', 'status']}
            />
        </div>
    );
};

export default Transactions;
