import Image from 'next/image';
import React, { type ReactNode } from 'react';

const ExchangeLayout = ({ children }: { children?: ReactNode }) => {
    return (
        <div className='relative w-full flex flex-col max-w-screen min-h-screen z-[0]'>
            <Image
                src='/frame/bg-circles-exchange.svg'
                alt='Circle desktop'
                width={1576}
                height={1580}
                className='hidden lg:block absolute bottom-[0] left-0 w-full'
            />

            <Image
                src='/frame/bg-circles-exchange2.svg'
                alt='Circle desktop'
                width={1757}
                height={1757}
                className='hidden sm:block lg:hidden absolute bottom-[0] left-0 w-full'
            />

            {/* coins */}
            <Image
                src='/Tether.png'
                alt='tether'
                width={96}
                height={96}
                className='absolute top-[58%] right-[5%] sm:top-[62%] sm:right-[10%] lg:top-[1%] lg:right-[5%] xl:top-[11%] xl:right-[5%] 2xl:top-[11%] 2xl:right-[10%]  w-[45px] h-[45px] sm:w-[90px] sm:h-[90px] lg:w-[96px] lg:h-[96px]'
            />

            <Image
                src='/Tron.png'
                alt='tron'
                width={96}
                height={96}
                className='absolute blur-[1px] top-[3%] left-[-10%] sm:top-[-1%] sm:left-[-7%] lg:top-[27%]  lg:left-[12%]  xl:top-[11%] xl:right-[15%]  w-[44px] h-[44px] sm:w-[90px] sm:h-[90px] lg:w-[94px] lg:h-[94px]'
            />
            <Image
                src='/Polkadot.png'
                alt='polkadot'
                width={119}
                height={119}
                className='absolute blur-[1px] bottom-[25%] right-[70%] sm:bottom-[20%] sm:right-[40%] lg:bottom-[12%] lg:right-[60%] w-[82px] h-[81px] sm:w-[119px] sm:h-[119px]'
            />
            <Image
                src='/USDC.png'
                alt='usdc'
                width={79}
                height={79}
                className='absolute blur-[1px] bottom-[38%] left-[10%] sm:bottom-[38%] sm:left-[10%] lg:bottom-[30%] lg:left-[11%] w-[53px] h-[53px] sm:w-[79px] sm:h-[79px]'
            />

            <Image
                src='/XRP.png'
                alt='xrp'
                width={169}
                height={169}
                className='absolute blur-[1px] top-[2%] right-[-5%] sm:top-[-2%] sm:right-[2%] lg:top-[50%] lg:right-[15%] w-[39px] h-[39px] sm:w-[73px] sm:h-[73px] lg:w-[169px] lg:h-[169px]'
            />

            {children}
        </div>
    );
};

export default ExchangeLayout;
