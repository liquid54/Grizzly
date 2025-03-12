    import {ThemedText} from "@/components/ThemedText";
    import Button from "@/components/Button";
    import Image from "next/image";
    import Exchange from "@/components/Exchange";
    import ExchangeList from "@/components/ExchangeList";
    import AboutUs from "@/components/AboutUs";
    import Link from "next/link";


    const HomePage = () => {
        return (
            <>
                <div className='px-[250px] pt-[158px]'>
                    <div className='flex flex-row justify-between space-x-[189px]'>
                        <div className='flex flex-col space-y-[16px]'>
                            <div className='flex flex-col'>
                                <ThemedText type='heading_blue'>Buy and Sell</ThemedText>
                                <ThemedText type='heading'>Cryptocurrency Instantly</ThemedText>
                            </div>
                            <ThemedText>Lorem ipsum dolor sit amet consectetur. Pellentesque est cursus pretium ut egestas.
                                Viverra pellentesque elementum tristique nibh urna bibendum sollicitudin elit
                                bibendum.
                            </ThemedText>
                            <Link href='/exchange'>
                                <Button variant='primary' size='medium'>Exchange</Button>
                            </Link>
                        </div>
                        <Image
                            width={1920}
                            height={1080}
                            src="/IMG_5815 (1).png"
                            alt="logo"
                            className="flex rounded-full w-[566px] h-[566px]"
                        />
                    </div>
                    <div className='pt-[370px] flex flex-row gap-x-[53px]'>
                        <Exchange fullWidthButton={true} visibleBorder={true}/>
                        <div className='flex  justify-center flex-col '>
                            <ThemedText type='title'>Cryptocurrency</ThemedText>
                            <ThemedText type='title'>Exchange</ThemedText>
                        </div>
                    </div>
                </div>
                <ExchangeList/>
                <AboutUs/>
            </>
        );
    }

    export default HomePage;