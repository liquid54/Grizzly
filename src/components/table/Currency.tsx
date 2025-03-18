import Avatar from '@/components/Avatar';
import Box from '@/components/Box';
import { ThemedText } from '@/components/ThemedText';
import Image from 'next/image';
import React from 'react';

const Currency = () => {
    return (
        <div className='flex items-center gap-[10px] shrink-0'>
            <div className='flex items-center shrink-0'>
                <Avatar
                    className='w-[32px] md:w-[20px] llg:w-[32px]'
                    size={32}
                    src='/icons/coins/tether.svg'
                    alt='usdt'
                />
                <Avatar
                    className='w-[32px] md:w-[20px] llg:w-[32px] z-10 -ml-[8px]'
                    size={32}
                    src='/icons/coins/pumb.svg'
                    alt='pumb'
                />
            </div>
            <Box className='gap-1'>
                <ThemedText
                    type='panel-table-header'
                    className='font-semibold text-brown-100'
                >
                    USDT
                </ThemedText>
                <Image
                    alt='currency arrow'
                    src='/icons/currencyArrow.svg'
                    width={15}
                    height={10}
                    objectFit='contain'
                />
                <ThemedText
                    type='panel-table-header'
                    className='font-semibold text-brown-100'
                >
                    UAH
                </ThemedText>
            </Box>
        </div>
    );
};

export default Currency;
