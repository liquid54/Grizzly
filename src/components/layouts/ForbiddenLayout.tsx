import Image from 'next/image';
import React, { type ReactNode } from 'react';

const ForbiddenLayout = ({ children }: { children?: ReactNode }) => {
    return (
        <div className='relative w-full flex flex-col max-w-screen min-h-screen overflow-hidden z-[0]'>
            <Image
                src='/frame/bg-circles-forbidden.svg'
                alt='Circle desktop'
                width={1920}
                height={850}
                className='hidden lg:block absolute bottom-0 left-0 w-full'
            />
            <Image
                src='/frame/bg-circles-forbidden-tablet.svg'
                alt='Circle tablet'
                width={1024}
                height={850}
                className='hidden sm:block lg:hidden absolute bottom-0 left-0'
            />

            {/* coins */}

            <Image
                src='/Bitcoin.png'
                alt='bitcoin'
                width={130}
                height={130}
                className='absolute -top-5 sm:-top-10  left-[30px] sm:left-[43%] lg:left-[32%] w-[90px] h-[90px] sm:h-[130px] sm:w-[130px] lg:w-[120px] lg:h-[120px]'
            />

            <Image
                src='/Litecoin.png'
                alt='litecoin'
                width={130}
                height={130}
                className='absolute blur-[1px] top-[65px] -right-[10px] sm:top-[100px] sm:-right-[30px] lg:top-[92%] lg:right-[37%] w-[50px] h-[50px] sm:h-[130px] sm:w-[130px] lg:w-[120px] lg:h-[120px]'
            />

            <Image
                src='/Tether.png'
                alt='tether'
                width={120}
                height={120}
                className='absolute bottom-[100px] left-[86px] sm:bottom-[200px] sm:left-82px] lg:bottom-[220px] lg:left-[215px] w-[50px] h-[50px] sm:w-[90px] sm:h-[90px] lg:w-[120px] lg:h-[120px]'
            />

            <Image
                src='/Tron.png'
                alt='tron'
                width={130}
                height={130}
                className='absolute blur-[1px] top-[43%] right-[86%] sm:top-[30%] sm:right-[92%] lg:top-[160px] lg:right-[28%] w-[80px] h-[80px] sm:w-[130px] sm:h-[130px]'
            />
            <Image
                src='/Polkadot.png'
                alt='polkadot'
                width={125}
                height={125}
                className='absolute blur-[1px] -bottom-[25px] right-[40px] sm:-bottom-[35px] sm:right-[135px] lg:bottom-[180px] lg:right-[100px] w-[82px] h-[81px] sm:w-[125px] sm:h-[125px]'
            />
            <Image
                src='/USDC.png'
                alt='usdc'
                width={116}
                height={116}
                className='absolute hidden lg:block top-[140px] -right-[25px]'
            />

            <Image
                src='/XRP.png'
                alt='xrp'
                width={150}
                height={150}
                className='absolute blur-[1px] hidden sm:block top-[246px] left-[65%] lg:top-[280px] lg:-left-[35px] w-[95px] h-[95px] sm:w-[150px] sm:h-[150px]'
            />

            {children}
        </div>
    );
};

export default ForbiddenLayout;
