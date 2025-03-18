import Image from "next/image";
import Navigation from "@/components/Main/Navigation";
import LanguageSwitcher from "@/components/User/LanguageSelector";
import {ThemedText} from "@/components/ThemedText";
import Link from "next/link";
import ButtonTg from "@/components/ButtonTG";

const Footer = () => {
    return (
        <footer className='bg-[#F0F0F3]'>
            <div className='px-[15px] py-[20px] flex flex-col justify-center md:gap-y-[10px] gap-y-[50px] md:px-[32px] md:py-[21px] max-w-[1420px] mx-auto'>
                <div className='flex flex-col gap-y-[30px] items-center md:flex-row md:justify-between'>
                    <div className='flex flex-col gap-y-[40px] justify-center items-center md:flex-row md:gap-x-[60px] lg:gap-x-[125px]'>
                        <Image
                            width={1920}
                            height={1080}
                            src="/IMG_5815 (1).png"
                            alt="logo"
                            className="rounded-[120px] w-[130px] h-[130px]"
                        />
                        <div className='flex flex-col gap-y-[20px] justify-center items-center text-center md:flex-row md:gap-x-[70px] lg:gap-x-[70px]'>
                            <Navigation />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[20px] w-full md:flex-row md:gap-x-[20px] md:w-auto'>
                        <div className='flex flex-row justify-center items-center'>
                            <LanguageSwitcher showLanguageIcon={false}/>
                        </div>
                        <Link href={''} className="w-full md:w-auto">
                            <ButtonTg />
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <ThemedText type='text-footer'>Cobra Exchange 2025 All Rights reserved</ThemedText>
                </div>
            </div>
        </footer>
    )
}
export default Footer;