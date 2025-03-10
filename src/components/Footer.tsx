import Image from "next/image";
import Navigation from "@/components/Navigation";
import LanguageSwitcher from "@/components/LanguageSelector";
import {ThemedText} from "@/components/ThemedText";


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
                    <LanguageSwitcher showLanguageIcon={false} />
                </div>
                <div className='flex justify-center items-center w-full'>
                    <ThemedText>Cobra Exchange 2025 All Rights reserved</ThemedText>
                </div>
            </div>
        </footer>
    )
}
export default Footer;