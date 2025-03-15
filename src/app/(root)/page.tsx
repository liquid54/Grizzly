import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import Image from "next/image";
import Exchange from "@/components/exchange/Exchange";
import ExchangeList from "@/components/exchange/ExchangeList";
import AboutUs from "@/components/Main/AboutUs";
import Link from "next/link";

import BackgroundCircles from "@/components/Main/bgCircles/BgCircles";


const HomePage = () => {
    return (
        <>
            <div className=''>
                <div className="relative w-full overflow-hidden">
                    {/* SVG Background Circles */}
                    <BackgroundCircles/>
                    {/* Основний контент */}
                    <div className="flex flex-row justify-between z-10 space-x-[119px] relative lg:pt-[158px] lg:pb-[272px] lg:px-[250px] md:pt-[211px] pb-[297px] px-[32px]">
                        <div className="flex flex-col space-y-[16px] z-10 justify-center">
                            <div className="flex flex-col space-y-[16px]">
                                <ThemedText type="heading_blue">Buy and Sell</ThemedText>
                                <ThemedText type="heading">Cryptocurrency</ThemedText>
                                <ThemedText type="heading">Instantly</ThemedText>
                            </div>

                            <ThemedText>
                                Lorem ipsum dolor sit amet consectetur. Pellentesque est cursus pretium ut egestas.
                                Viverra pellentesque elementum tristique nibh urna bibendum sollicitudin elit bibendum.
                            </ThemedText>
                            <Link href="/exchange">
                                <Button variant="primary" size="medium">Exchange</Button>
                            </Link>
                        </div>
                        <Image
                            width={1920}
                            height={1080}
                            src="/IMG_5815 (1).png"
                            alt="IMG_5815(1)"
                            className="object-cover lg:w-[566px] lg:h-[566px] md:w-[378px] md:h-[378px] rounded-full"
                        />
                    </div>
                </div>


                <div className='pt-[133px] flex gap-x-[53px] justify-center items-center'>
                    <Exchange fullWidthButton={true} visibleBorder={true} buttonLink={'/exchangeconfirm'}/>
                    <ThemedText type='title' className='text-wrap'>Cryptocurrency Exchange</ThemedText>
                </div>
            </div>
            <ExchangeList/>
            <div className='px-[370px] py-[150px]'>
                <AboutUs/>
            </div>
        </>
    );
}

export default HomePage;