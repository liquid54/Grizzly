import Avatar from '@/components/Avatar';
import Box from '@/components/Box';
import Button from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import React from 'react';

const UserOverview = () => {
    return (
        <div className='w-full flex flex-col md:flex-row md:items-center justify-between rounded-2xl lg:border lg:border-gray-100 gap-8 md:gap-4 2xl:gap-8 lg:px-[30px] lg:py-[22px]'>
            <div className='flex items-center md:flex-col md:items-start shrink-0 gap-5 md:gap-[10px] llg:gap-5 llg:flex-row llg:items-center'>
                <Avatar
                    className='w-[80px] h-[80px] md:w-[90px] md:h-[90px] xl:w-[110px] xl:h-[110px]'
                    alt='user avatar'
                    size={110}
                    src='/mock-avatar.jpeg'
                />
                <div className='flex flex-col gap-1'>
                    <ThemedText type='panel-text'>👋 Hello!</ThemedText>
                    <ThemedText type='panel-title'>Erik Kartmeno</ThemedText>
                </div>
            </div>
            <div className='flex items-center justify-between w-full gap-2 max-w-[924px]'>
                <div className='flex flex-col md:items-center justify-between w-full gap-5 2xl:gap-4 2xl:flex-row'>
                    <Box
                        type='column'
                        className='gap-1 w-full max-w-[160px] 2xl:max-w-[171px]'
                    >
                        <ThemedText type='panel-text'>User ID</ThemedText>
                        <ThemedText type='panel-title-blue'>
                            {'#62998021'}
                        </ThemedText>
                    </Box>
                    <div className='w-[1px] h-[88px] bg-gray-200 hidden 2xl:block' />
                    <Box
                        type='column'
                        className='gap-1 w-full max-w-[160px] 2xl:max-w-[171px]'
                    >
                        <ThemedText type='panel-text'>
                            Total Referrals
                        </ThemedText>
                        <ThemedText type='panel-title-blue'>21</ThemedText>
                    </Box>
                </div>
                <div className='flex flex-col md:items-center justify-between w-full gap-5 2xl:gap-4 2xl:flex-row'>
                    <div className='w-[1px] h-[88px] bg-gray-200 hidden 2xl:block' />
                    <Box
                        type='column'
                        className='gap-1 w-full max-w-[160px] 2xl:max-w-[171px]'
                    >
                        <ThemedText type='panel-text'>
                            Referrals profit
                        </ThemedText>
                        <ThemedText type='panel-title-blue'>$ 126</ThemedText>
                    </Box>
                    <div className='w-[1px] h-[88px] bg-gray-200 hidden 2xl:block' />
                    <Box
                        type='column'
                        className='gap-1 w-full max-w-[160px] 2xl:max-w-[171px]'
                    >
                        <ThemedText type='panel-text'>
                            Total Exchanges
                        </ThemedText>
                        <ThemedText type='panel-title-blue'>132</ThemedText>
                    </Box>
                </div>
            </div>
            <Box type='column' className='gap-[10px] w-full md:max-w-[246px]'>
                <Button variant='primary' size='medium' className='w-full'>
                    Exchange
                </Button>
                <Button variant='secondary' size='medium' className='w-full'>
                    Withdraw
                </Button>
            </Box>
        </div>
    );
};

export default UserOverview;
