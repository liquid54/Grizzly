import Image from 'next/image';
import React, { type ReactNode } from 'react';

const AboutLayout = ({ children }: { children?: ReactNode }) => {
    return (
        <div className='relative w-full flex flex-col max-w-screen min-h-screen overflow-hidden z-[0]'>
            {/*<Image*/}


            {/*/!* coins *!/*/}

            <Image
                src='/Bitcoin.png'
                alt='bitcoin'
                width={145}
                height={145}
                className='hidden sm:block absolute lg:w-[74px] lg:h-[74px] md:w-[145px] md:h-[145px] w-[84px] h-[84px] lg:top-[295px] md:top-[187px] top-[64px] lg:left-[69%] md:left-[87%] left-[84%] md:blur-[1px] blur-[2.32px]'/>

            <Image
                src='/Polkadot.png'
                alt='polkadot'
                width={126}
                height={126}
                className='hidden sm:block absolute md:w-[126px] md:h-[126px] w-[56px] h-[56px] left-[-2%] lg:top-[179px] md:top-[104px] top-[27px] blur-[2px]'/>

            <Image
                src='/Polygon.png'
                alt='polygon'
                width={60}
                height={60}
                className='absolute lg:top-[139px] md:top-[58px] top-[330px] lg:left-[26%] md:left-[68.55%] left-[6.4%]'
            />

            <Image
                src='/XRP.png'
                alt='tether'
                width={74}
                height={74}
                className='absolute lg:block hidden lg:left-[9%] lg:pt-[833px]'
            />

            <Image
                src='/Litecoin.png'
                alt='litecoin'
                width={111}
                height={111}
                className='absolute lg:block hidden lg:left-[91%] lg:pt-[1162px] md:left-[90%] md:pt-[727px] left-[84%] pt-[1108px]'
            />

            <Image
                src='/BNB.png'
                alt='BNB'
                width={111}
                height={111}
                className='absolute lg:w-[168px] lg:h-[168px] md:w-[130px] md:h-[130px] w-[70px] h-[70px] lg:right-[93%] md:right-[93%] right-[11%] lg:bottom-[541px] md:bottom-[35px] -bottom-[8px]'
            />


            <Image
                src='/Tether.png'
                alt='tether'
                width={97}
                height={97}
                className='absolute w-[53px] h-[53px] md:w-[97px] md:h-[97px] lg:bottom-[70px] md:bottom-[24px] bottom-[10px] lg:right-[4%] md:-right-[27px] right-[96%]'
            />

            {children}
        </div>
    );
};

export default AboutLayout;
