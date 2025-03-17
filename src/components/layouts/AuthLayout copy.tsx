import Image from 'next/image';
import React, { type ReactNode } from 'react';

const AuthLayout = ({ children }: { children?: ReactNode }) => {
    return (
        <div className='relative w-full flex flex-col max-w-screen min-h-screen overflow-hidden z-[0]'>
            <Image
                src='/frame/bg-circles-bottom.svg'
                alt='Circle Left'
                width={1000}
                height={1000}
                className='absolute bottom-0 -left-[2%] sm:-bottom-[14%] sm:-left-[10%] w-[250px] md:w-[600px] lg:w-[1000px] h-[250px] md:h-[600px] lg:h-[1000px]'
            />
            <Image
                src='/frame/bg-circles-top.svg'
                alt='Circle Left'
                width={1000}
                height={1000}
                className='absolute top-0 -right-[5%] sm:-top-[15%] sm:-right-[10%] w-[250px] md:w-[600px] lg:w-[1000px] h-[250px] md:h-[600px] lg:h-[1000px]'
            />

            {children}
        </div>
    );
};

export default AuthLayout;
