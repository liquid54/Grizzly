"use client"


import Image from 'next/image';
import Button from '@/components/Button';
import Navigation from '@/components/Main/Navigation';
import LanguageSwitcher from '@/components/User/LanguageSelector';
import Link from 'next/link';
import ButtonTg from '../../ButtonTG';
import MobileHeader from "@/components/Main/Header/MobileHeader";
import {useState} from "react";
import SettingsMainMenu from "@/components/Main/Header/menu/MenuMain";
const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onOpenSettings = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <>
            <SettingsMainMenu isOpen={isOpen} setIsOpen={onOpenSettings} />
            <header className='border-b border-[#B9BEC9]'>
                <nav className='overflow-visible'>
                    <div
                        className='px-4 md:px-[32px] py-2 sm:py-3 md:py-4 lg:py-[14px] flex flex-row sm:flex-row md:justify-between lg:justify-between lg:gap-x-[40px] lg:max-w-[1420px] mx-auto'>
                        <MobileHeader isOpen={isOpen} setIsOpen={onOpenSettings} isMain={false}/>
                        <div
                            className='gap-x-[83px] md:flex flex-col sm:flex-col md:flex-row justify-center items-center md:gap-x-[40px] hidden'>
                            <Image
                                width={1920}
                                height={1080}
                                src='/IMG_5815 (1).png'
                                alt='logo'
                                className='rounded-full w-[56px] h-[56px] mb-4 md:mb-0 flex-shrink-0'
                            />
                            <div className='flex whitespace-nowrap overflow-visible gap-x-[40px] lg:gap-x-[70px]'>
                                <Navigation/>
                            </div>
                        </div>
                        <div className='flex flex-row gap-x-[30px]'>
                            <div className='hidden md:flex md:flex-row sm:gap-4 sm:items-center'>
                                <div className='flex justify-center items-center gap-x-[16px]'>
                                    <div className='flex items-center lg:gap-x-[6px] md:gap-x-[10px]'>
                                        <LanguageSwitcher/>
                                    </div>
                                </div>
                                <Link href={''}>
                                    <ButtonTg/>
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
        </>
    );
};

export default Header;
