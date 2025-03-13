import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import Image from "next/image";
import Exchange from "@/components/features/Exchange/Exchange";
import ExchangeList from "@/components/features/Exchange/ExchangeList";
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
                    <div
                        className="flex flex-row justify-between space-x-[189px] relative pt-[158px] pb-[272px] z-10 px-[250px]">
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
                            alt="Ведмідь в худі Balenciaga"
                            className="object-cover w-[566px] h-[566px] rounded-full"
                        />
                    </div>
                </div>


                <div className='pt-[133px] flex gap-x-[53px] justify-center items-center'>
                    <Exchange fullWidthButton={true} visibleBorder={true}/>
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