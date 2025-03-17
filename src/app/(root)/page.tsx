import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import Image from "next/image";
import Exchange from "@/components/exchange/Exchange";
import ExchangeList from "@/components/exchange/ExchangeList";
import AboutUs from "@/components/Main/AboutUs";
import Link from "next/link";

// import BackgroundCircles from "@/components/Main/bgCircles/BgCircles";


const HomePage = () => {
    return (
        <div className='pb-[100px] pt-[91px] lg:pb-[150px] lg:pt-[158px] md:pt-[211px]'>
            {/* Основний контент */}
            <div className='md:overflow-hidden lg:overflow-visible'>
                {/*<div className="flex flex-col items-center px-[16px] pt-[100px] gap-y-[59px] md:flex-row lg:max-w-[1420px] lg:mx-auto lg:pb-[272px] md:pt-[211px] md:px-[32px]">*/}
                <div className="flex flex-col md:flex-row items-center md:justify-between lg:max-w-[1420px] md:mx-auto md:max-w-[1013px] md:pl-8 lg:pl-0 md:px-0 px-4">
                    {/* Зображення ведмедя */}
                    <Image
                        width={1920}
                        height={1080}
                        src="/IMG_5815 (1).png"
                        alt="IMG_5815(1)"
                        className="lg:w-[566px] lg:h-[566px] md:w-[378px] md:h-[378px] w-[356px] sm:h-[356px] rounded-full lg:mr-[0px] md:mr-[-32px]"
                    />

                    {/* Текстовий блок */}
                    <div className="flex flex-col space-y-[16px] lg:max-w-[735px] md:max-w-[512px] md:order-first text-center md:text-left ">
                        <div className="flex flex-col">
                            <ThemedText type="heading_blue">Buy and Sell</ThemedText>
                            <ThemedText type="heading">Cryptocurrency Instantly</ThemedText>
                        </div>

                        <div>
                            <ThemedText type='text-main'>
                                Lorem ipsum dolor sit amet consectetur. Pellentesque est cursus pretium ut egestas.
                                Viverra pellentesque elementum tristique nibh urna bibendum sollicitudin elit bibendum.
                            </ThemedText>
                        </div>

                        <div className="w-full block md:hidden">
                            <Link href="/exchange" className="block w-full">
                                <Button variant="primary" size="medium" className="w-full">Exchange</Button>
                            </Link>
                        </div>

                        {/* Десктопна версія (видима тільки на md і більше) */}
                        <div className="hidden md:block">
                            <Link href="/exchange">
                                <Button variant="primary" size="medium">Exchange</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-[133px] flex flex-col md:flex-row gap-y-[20px] md:gap-x-[40px] lg:gap-x-[53px] justify-center items-center px-4 md:px-[32px] lg:px-[50px]'>
                <Exchange fullWidthButton={true} visibleBorder={true} buttonLink={'/exchangeconfirm'}/>
                <ThemedText type='title' className='text-wrap'>Cryptocurrency Exchange</ThemedText>
            </div>

            <ExchangeList/>
            <div className='lg:max-w-[1180px] md:max-w-[960px] md:mx-auto md:px-[32px] px-4'>
                <AboutUs/>
            </div>
        </div>
    );
}

export default HomePage;