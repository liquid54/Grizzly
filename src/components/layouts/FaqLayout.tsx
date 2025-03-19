import Image from 'next/image';
import React, {type ReactNode} from 'react';

const FaqLayout = ({children}: { children?: ReactNode }) => {
    return (
        <div className='relative w-full flex flex-col max-w-screen min-h-screen overflow-hidden z-2'>

                <Image
                    src='frame/faq/bg-circles-top.svg'
                    alt='Circle Left'
                    width={1050}
                    height={1050}
                    className='hidden md:block absolute lg:w-[1050px] lg:h-[1050px] md:w-[670px] md:h-[670px]' //lg:top-[-4.5%] lg:left-[-4%]
                />

            <Image
                src='frame/faq/bg-circles-bot.svg'
                alt='Circle Left'
                width={1050}
                height={1050}
                className='hidden lg:block absolute lg:w-[1350px] lg:h-[1350px] lg:bottom-[-5%] lg:left-[36%]' //lg:top-[-4.5%] lg:left-[-4%]
            />


            {/*/!* coins *!/*/}

            <Image
                src='/Tether.png'
                alt='tether'
                width={149}
                height={149}
                className='absolute lg:w-[149px] lg:h-[149px] md:w-[87px] md:h-[87px] w-[51px] h-[51px] lg:top-[136px] md:top-[34px] top-[30px] lg:left-[-3%] md:left-[-3%] left-[-4%]'
            />


            <Image
                src='/Polkadot.png'
                alt='polkadot'
                width={126}
                height={126}
                className='absolute lg:w-[126px] lg:h-[126px] md:w-[66px] md:h-[66px] w-[55px] h-[55px] lg:top-[584px] md:top-[67px] top-[32px] lg:right-[-3%] md:right-[0.43%] right-[-6%] blur-[2px]'/>

            <Image
                src='/XRP.png'
                alt='xrp'
                width={84}
                height={84}
                className='absolute md:w-[84px] md:h-[84px] w-[57px] h-[57px] lg:top-[1206px] md:top-[1267px] top-[1201px] lg:left-[9%] md:left-[-7%] left-[-6%] blur-[2px]'
            />
            <Image
                src='/Bitcoin.png'
                alt='bitcoin'
                width={161}
                height={161}
                className='absolute lg:w-[161px] lg:h-[161px] md:w-[121px] md:h-[121px] w-[56px] h-[56px] lg:right-[4%] md:right-[-7%] right-[24%]'/>

            <Image
                src='/USDC.png'
                alt='USDC'
                width={116}
                height={116}
                className='hidden lg:block absolute lg:w-[116px] lg:h-[116px] lg:left-[11%] lg:bottom-[1093px] blur-[2px]'
            />

            <Image
                src='/Litecoin.png'
                alt='Litecoin'
                width={111}
                height={111}
                className='hidden lg:block absolute lg:w-[111px] lg:h-[111px] lg:right-[5%] lg:bottom-[852px]'
            />


            <Image
                src='/Polygon.png'
                alt='polygon'
                width={141}
                height={141}
                className='hidden md:block absolute lg:w-[141px] lg:h-[141px] md:w-[97px] md:h-[97px] w-[70px] h-[70px] lg:bottom-[604px] md:bottom-[100px] bottom-[15px] lg:left-[-2%] md:left-[-2%]'
            />

            <Image
                src='/Tron.png'
                alt='Tron'
                width={127}
                height={127}
                className='absolute md:w-[127px] md:h-[127px] w-[67px] h-[67px] lg:right-[-2%] md:right-[5%] right-[-10%] lg:bottom-[71px] md:bottom-[-54px] bottom-[-8px] blur-[2px]'
            />
            {children}
        </div>
    );
};

export default FaqLayout;
