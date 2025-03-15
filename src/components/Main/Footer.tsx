import Image from "next/image";
import Navigation from "@/components/Main/Navigation";
import LanguageSwitcher from "@/components/User/LanguageSelector";
import {ThemedText} from "@/components/ThemedText";
import Link from "next/link";
import ButtonTg from "@/components/ButtonTG";


const Footer = () => {
    return (
        <footer className='bg-[#F0F0F3]'>
            <div className='px-[250px] py-[18.5px] flex flex-col justify-center'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-row gap-x-[125px] items-center'>
                        <Image
                            width={1920}
                            height={1080}
                            src="/IMG_5815 (1).png"
                            alt="logo"
                            className="rounded-[120px] w-[130px] h-[130px]"
                        />
                        <Navigation />
                    </div>
                    <div className='hidden md:flex md:flex-row sm:gap-4 sm:items-center'>
                        <div className='flex flex-row justify-center gap-x-[16px] items-center'>
                            <LanguageSwitcher showLanguageIcon={false}/>
                        </div>
                        <Link href={''}>
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