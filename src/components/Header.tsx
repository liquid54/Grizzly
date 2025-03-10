import Image from "next/image";
import Button from "@/components/Button";
import Navigation from "@/components/Navigation";
import LanguageSwitcher from "@/components/LanguageSelector";

const Header = () => {
    return (
        <header className='border-b border-[#B9BEC9]'>
            <nav>
                <div className='px-[250px] py-[14px] flex flex-row justify-between items-center '>
                    <div className='gap-x-[83px] flex flex-row items-center'>
                        <Image
                            width={1920}
                            height={1080}
                            src="/IMG_5815 (1).png"
                            alt="logo"
                            className="rounded-full w-[56px] h-[56px]"
                        />

                        <Navigation />
                    </div>
                    <div className='flex flex-row gap-x-[30px]'>
                        <div className='bg-white'>
                            <div className='flex flex-row justify-center gap-x-[16px] items-center'>
                                <LanguageSwitcher />
                            </div>
                        </div>
                        <div className='flex gap-x-[16px] items-center'>
                            <Button variant='secondary' size='small'>Log In</Button>
                            <Button variant='primary' size='small'>Sign Up</Button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;