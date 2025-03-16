import Image from "next/image";
import Navigation from "@/components/Main/Navigation";
import LanguageSwitcher from "@/components/User/LanguageSelector";
import {ThemedText} from "@/components/ThemedText";
import Link from "next/link";
import ButtonTg from "@/components/ButtonTG";

const Footer = () => {
    return (
        <footer className='bg-[#F0F0F3]'>
            <div className='lg:px-[250px] md:px-[32px] sm:px-[15px] py-[18.5px] md:py-[21px] sm:py-[20px] flex flex-col justify-center sm:gap-y-[50px]'>
                <div className='flex md:flex-row sm:flex-col md:justify-between items-center sm:gap-y-[30px]'>
                    <div className='flex md:flex-row gap-x-[125px] items-center md:gap-x-[60px] sm:flex-col sm:gap-y-[40px] sm:justify-center'>
                        <Image
                            width={1920}
                            height={1080}
                            src="/IMG_5815 (1).png"
                            alt="logo"
                            className="rounded-[120px] w-[130px] h-[130px]"
                        />
                        <div className='flex md:flex-row lg:gap-x-[70px] md:flex gap-x-[70px] sm:flex-col sm:gap-y-[20px] sm:justify-center sm:items-center sm:text-center'>
                            <Navigation />
                        </div>
                    </div>
                    <div className='flex gap-x-[20px] md:flex-row sm:flex-col sm:gap-y-[20px] sm:w-full md:w-auto'>
                        <div className='flex flex-row justify-center items-center'>
                            <LanguageSwitcher showLanguageIcon={false}/>
                        </div>
                        <Link href={''} className="sm:w-full">
                            <ButtonTg />
                        </Link>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full'>
                    <ThemedText>Cobra Exchange 2025 All Rights reserved</ThemedText>
                </div>
            </div>
        </footer>
    )
}
export default Footer;