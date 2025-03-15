'use client';
import LanguageSwitcher from '@/components/User/LanguageSelector';
import Link from 'next/link';
import Avatar from '../Avatar';
import ButtonTg from '../ButtonTG';
import MobileHeader from './MobileHeader';
import SettingsMenu from '@/features/user-dashboard/components/settings-menu/SettingsMenu';
import { useState } from 'react';

const Header = ({ isMain = false }: { isMain?: boolean }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onOpenSettings = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <>
            <header className='shadow-header sm:shadow-none sm:border-b sm:border-white-200 h-fit'>
                <nav
                    className={
                        isMain
                            ? 'max-w-[1920px] m-auto px-4 sm:px-[32px] lg:px-[30px] py-[6px] lg:pt-[10px] lg:pb-[11px] sm:pt-[8px] sm:pb-[7px] flex flex-row justify-end items-center'
                            : ''
                    }
                >
                    <div className='w-full flex justify-center sm:justify-end items-center'>
                        <MobileHeader
                            isOpen={isOpen}
                            setIsOpen={onOpenSettings}
                        />
                        <div className='hidden flex-row gap-5 sm:flex'>
                            <LanguageSwitcher />
                            <Link href={''}>
                                <ButtonTg />
                            </Link>
                            <Link href='/main'>
                                <Avatar
                                    size={50}
                                    alt='user avatar'
                                    src='/mock-avatar.jpeg'
                                />
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            {isMain && (
                <SettingsMenu isOpen={isOpen} setIsOpen={onOpenSettings} />
            )}
        </>
    );
};

export default Header;
