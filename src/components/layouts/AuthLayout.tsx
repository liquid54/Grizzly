import Image from 'next/image';
import React, { type ReactNode } from 'react';

const AuthLayout = ({ children }: { children?: ReactNode }) => {
    return (
        <div className='relative w-full flex flex-col max-w-screen min-h-screen overflow-hidden z-[0]'>
            <Image
                src='/frame/bg-circles.svg'
                alt='Circle Left'
                width={850}
                height={850}
                className='hidden sm:block absolute -bottom-[2%] -left-[2%] w-[300px] md:w-[470px] lg:w-[850px] h-[300px] md:h-[470px] lg:h-[850px]'
            />
            <Image
                src='/frame/bg-circles.svg'
                alt='Circle Right'
                width={850}
                height={850}
                className='hidden sm:block absolute -top-[2%] -right-[2%] rotate-180 w-[300px] md:w-[470px] lg:w-[850px] h-[300px] md:h-[470px] lg:h-[850px]'
            />

            <Image
                src='/frame/bg-circles-bottom.svg'
                alt='Mobile Circle Left'
                width={250}
                height={250}
                className='sm:hidden absolute bottom-0 -left-[2%] w-[250px] h-[250px]'
            />
            <Image
                src='/frame/bg-circles-top.svg'
                alt='Mobile Circle right'
                width={250}
                height={250}
                className='sm:hidden absolute top-0 -right-[5%] w-[250px] h-[250px]'
            />

            {/* coins */}

            <Image
                src='/Bitcoin.png'
                alt='bitcoin'
                width={137}
                height={137}
                className='hidden sm:block absolute -top-10 right-[55%] lg:top-12 lg:right-[34%]'
            />

            <Image
                src='/Tether.png'
                alt='tether'
                width={148}
                height={148}
                className='absolute top-3 left-[88%] sm:top-[30%] sm:-left-[40px] lg:top-[38%] lg:left-[12%] w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] lg:w-[148px] lg:h-[148px]'
            />

            <Image
                src='/Tron.png'
                alt='tron'
                width={120}
                height={120}
                className='absolute top-[120px] -left-5 sm:top-[70%] sm:left-[40px] lg:top-[75%] lg:-left-9 w-[64px] h-[64px] sm:w-[120px] sm:h-[120px]'
            />
            <Image
                src='/Polygon.png'
                alt='polygon'
                width={108}
                height={108}
                className='absolute top-[90%] -right-4 sm:top-[30%] sm:-right-[30px] lg:top-[35%] lg:right-[160px] w-[48px] h-[48px] sm:w-[108px] sm:h-[108px]'
            />
            <Image
                src='/USDC.png'
                alt='usdc'
                width={116}
                height={116}
                className='absolute -bottom-[20px] right-[80%] sm:bottom-[5%] sm:right-[10%] lg:bottom-[50px] lg:right-[27%] w-[55px] h-[55px] sm:w-[88px] sm:h-[88px] lg:w-[116px] lg:h-[116px]'
            />

            {children}
        </div>
    );
};

export default AuthLayout;
