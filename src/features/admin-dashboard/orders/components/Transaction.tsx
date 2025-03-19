import Avatar from '@/components/Avatar';
import Box from '@/components/Box';
import { ThemedText } from '@/components/ThemedText';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Status from '@/components/Status';
import { TRANSACTION_STATUS } from '@/constants';
import AdminSelect from '@/components/ui/status-select';

const Transaction = () => {
    return (
        <div className='flex flex-col w-full pt-5 xs:p-[30px]  lg:p-0 lg:pt-[30px] lg:max-w-[586px] mx-auto gap-[30px] md:gap-[50px] xs:rounded-2xl xs:border xs:border-white-200 lg:border-0'>
            <div className='flex items-center gap-[30px] shrink-0'>
                <div className='flex items-center shrink-0'>
                    <Avatar
                        className='w-[70px] sm:w-[100px]'
                        size={100}
                        src='/icons/coins/tether.svg'
                        alt='usdt'
                    />
                    <Avatar
                        className='w-[70px] sm:w-[100px] z-10 -ml-[37px]'
                        size={100}
                        src='/icons/coins/pumb.svg'
                        alt='pumb'
                    />
                </div>
                <Box type='column' className='gap-1'>
                    <Box className='gap-1'>
                        <ThemedText
                            type='panel-heading'
                            className='text-[24px] md:text-[34px]'
                        >
                            USDT
                        </ThemedText>
                        <Image
                            alt='currency arrow'
                            src='/icons/currencyArrow.svg'
                            width={20}
                            height={10}
                            objectFit='contain'
                        />
                        <ThemedText
                            type='panel-heading'
                            className='text-[24px] md:text-[34px]'
                        >
                            UAH
                        </ThemedText>
                    </Box>
                    <ThemedText
                        type='empty'
                        className='text-[16px] sm:text-[24px] leading-none font-medium text-blue-100 font-poppins'
                    >
                        ID: 8533813264
                    </ThemedText>
                </Box>
            </div>

            <Box type='column' className='gap-3 sm:gap-[30px]'>
                <Box className='justify-between'>
                    <ThemedText
                        type='panel-medium-text'
                        className='font-normal text-[15px] sm:text-[24px] lg:text-[24px]'
                    >
                        Date
                    </ThemedText>
                    <ThemedText
                        type='empty'
                        className='text-[15px] sm:text-[24px] leading-none font-semibold text-brown-100 font-poppins'
                    >
                        12.01.2025
                    </ThemedText>
                </Box>
                <Box className='justify-between'>
                    <ThemedText
                        type='panel-medium-text'
                        className='font-normal text-[15px] sm:text-[24px] lg:text-[24px]'
                    >
                        Amount
                    </ThemedText>
                    <ThemedText
                        type='empty'
                        className='text-[15px] sm:text-[24px] leading-none font-semibold text-brown-100 font-poppins'
                    >
                        500
                    </ThemedText>
                </Box>
                <Box className='justify-between'>
                    <ThemedText
                        type='panel-medium-text'
                        className='font-normal text-[15px] sm:text-[24px] lg:text-[24px]'
                    >
                        Exchange rate
                    </ThemedText>
                    <ThemedText
                        type='empty'
                        className='text-[15px] sm:text-[24px] leading-none font-semibold text-brown-100 font-poppins'
                    >
                        10
                    </ThemedText>
                </Box>
                <Box className='justify-between'>
                    <ThemedText
                        type='panel-medium-text'
                        className='font-normal text-[15px] sm:text-[24px] lg:text-[24px]'
                    >
                        Recipient details
                    </ThemedText>
                    <ThemedText
                        type='empty'
                        className='text-[15px] sm:text-[24px] leading-none font-semibold text-brown-100 font-poppins'
                    >
                        4149 **** **** 4523
                    </ThemedText>
                </Box>
                <Box className='justify-between'>
                    <ThemedText
                        type='panel-medium-text'
                        className='font-normal text-[15px] sm:text-[24px] lg:text-[24px]'
                    >
                        Payment method
                    </ThemedText>
                    <ThemedText
                        type='empty'
                        className='text-[15px] sm:text-[24px] leading-none font-semibold text-brown-100 font-poppins'
                    >
                        4149 **** **** 4523
                    </ThemedText>
                </Box>
                <Box className='justify-between'>
                    <ThemedText
                        type='panel-medium-text'
                        className='font-normal text-[15px] sm:text-[24px] lg:text-[24px]'
                    >
                        Status
                    </ThemedText>
                    <Status
                        status={TRANSACTION_STATUS.FAILED}
                        className='text-[15px] sm:text-[24px] md:text-[24px] llg:text-[24px] leading-none'
                    />
                </Box>

                <Box className='flex-col gap-[14px] sm:flex-row sm:gap-[30px] justify-start sm:mx-auto lg:mx-0'>
                    <AdminSelect />
                    <Button size='xl' variant='primary'>
                        Save
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Transaction;
