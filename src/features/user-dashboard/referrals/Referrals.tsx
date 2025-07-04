'use client';
import Box from '@/components/Box';
import Button from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import CustomSelect from '@/components/ui/select';
import React, { useState } from 'react';
import { data, header } from '../components/table/mockReferralsData';
import Table from '../components/table/Table';
import WithdrawalModal from './WithdrawalModal';
import Copy from '@/assets/icons/Copy';

const Referrals = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);

    return (
        <>
            <div className='w-full flex flex-col gap-[30px] xs:rounded-2xl xs:border xs:border-white-200 lg:border-0 xs:p-[30px] lg:p-0'>
                <div className='flex items-end justify-center sm:justify-between'>
                    <div className='w-full sm:w-fit flex flex-col gap-4 md:gap-4 lg:gap-5'>
                        <ThemedText
                            type='title_poppins'
                            className='text-[24px] lg:text-[34px] leading-none'
                        >
                            My referrals
                        </ThemedText>
                        <div className='block min-[1300px]:hidden'>
                            <RightBlock onOpen={onOpen} />
                        </div>
                        {/* filters */}
                        <Box className='gap-5 sm:gap-4 items-center flex-col sm:flex-row'>
                            <Box className='gap-4 items-center'>
                                <div className='w-[134px] min-[390px]:w-[169px] sm:w-[195px]'>
                                    <CustomSelect title='Wallet type' />
                                </div>
                                <div className='w-[134px] min-[390px]:w-[169px] sm:w-[195px]'>
                                    <CustomSelect title='Total profit' />
                                </div>
                            </Box>
                            <Button
                                variant='text'
                                size='text'
                                className='sm:mt-[21px]'
                            >
                                Reset
                            </Button>
                        </Box>
                    </div>
                    <div className='hidden min-[1300px]:block'>
                        <RightBlock onOpen={onOpen} />
                    </div>
                </div>

                <Table
                    tableHeader={header}
                    indexMobileDismiss={[2]}
                    data={data}
                    gridTemplateColumns='135px 110px 130px 110px 150px 120px'
                    firstRenderElementKeys={['referral', 'telegram']}
                />
            </div>
            <WithdrawalModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Referrals;

const RightBlock = ({ onOpen }: { onOpen: () => void }) => {
    return (
        <Box type='column' className='gap-5 w-full sm:max-w-[609px]'>
            <Box className='justify-between gap-4'>
                <Box type='column' className='gap-2'>
                    <Box className='gap-2 items-end'>
                        <ThemedText
                            type='empty'
                            className='font-semibold text-[26px] text-blue-100 font-poppins leading-none'
                        >
                            125$
                        </ThemedText>
                        <ThemedText
                            type='panel-medium-text'
                            className='md:text-[18px]'
                        >
                            - Total balance
                        </ThemedText>
                    </Box>
                    <Box className='gap-2 items-end'>
                        <ThemedText type='panel-medium-text'>
                            Minimum withdrawal amount -{' '}
                            <ThemedText
                                type='panel-medium-text-blue'
                                className='leading-6'
                            >
                                $500
                            </ThemedText>
                        </ThemedText>
                    </Box>
                </Box>
                <Button
                    variant='primary'
                    size='_small'
                    onClick={onOpen}
                    className='shrink-0'
                >
                    Withdraw
                </Button>
            </Box>
            <Box className='flex items-center rounded-2xl px-4 py-[9px] bg-blue-400 justify-between md:justify-start'>
                <ThemedText type='panel-medium-text-blue'>
                    My referral link
                </ThemedText>
                <ThemedText
                    type='panel-medium-text-blue'
                    className='hidden md:block'
                >
                    {' '}
                    - httpsadfghyoEQT7IDFGIDFGYETQEJQEGHEFGqyedtq
                </ThemedText>
                <Button
                    variant='text'
                    size='text'
                    className='ml-2 -scale-x-100'
                >
                    <Copy color='text-blue-100' />
                </Button>
            </Box>
        </Box>
    );
};
