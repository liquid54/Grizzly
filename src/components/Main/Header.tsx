import Image from 'next/image';
import Button from '@/components/Button';
import Navigation from '@/components/Main/Navigation';
import LanguageSwitcher from '@/components/User/LanguageSelector';
import Link from 'next/link';
import ButtonTg from '../ButtonTG';

const Header = () => {
    return (
        <header className='border-b border-[#B9BEC9]'>
            <nav>
                <div className='px-4 lg:px-[250px] md:px-[32px] py-2 sm:py-3 md:py-4 lg:py-[14px] flex flex-row sm:flex-row justify-between items-center'>
                    <div className='gap-x-[83px] flex flex-col sm:flex-col md:flex-row justify-center items-center md:gap-x-[40px]'>
                        <Image
                            width={1920}
                            height={1080}
                            src='/IMG_5815 (1).png'
                            alt='logo'
                            className='rounded-full w-[56px] h-[56px] mb-4 md:mb-0'
                        />
                        <div className='hidden lg:gap-x-[70px] md:flex gap-x-[70px]'>
                            <Navigation />
                        </div>
                    </div>
                    <div className='flex flex-row gap-x-[30px]'>
                        <div className='hidden md:flex md:flex-row sm:gap-4 sm:items-center'>
                            <div className='flex flex-row justify-center gap-x-[16px] items-center'>
                                <LanguageSwitcher />
                            </div>
                            <Link href={''}>
                                <ButtonTg />
                            </Link>
                        </div>
                        <div className='hidden lg:flex gap-x-[16px] items-center'>
                            <Link href='/login'>
                                <Button variant='secondary' size='small'>
                                    Log In
                                </Button>
                            </Link>
                            <Link href='/signup'>
                                <Button variant='primary' size='small'>
                                    Sign Up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
