import Avatar from '@/components/Avatar';
import type { OpenMenuProps } from '@/types/main';
import React, { type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MenuProps extends OpenMenuProps {
    children: ReactNode;
    isMain?: boolean;
}
const BurgerMenuWrapper = ({ isOpen, setIsOpen, children }: MenuProps) => {
    return (
        <div
            className={`absolute top-0 left-0 h-full w-full lg:w-fit lg:bg-none ${isOpen ? 'bg-dark-50' : 'bg-none'}`}
            onClick={setIsOpen}
        >
            <div
                className={`transition-transform duration-300 h-full w-80 lg:w-[133px] lg:border-r lg:border-gray-100 lg:flex flex-col items-center gap-[30px] bg-white pt-4 px-4 pb-12 sm:py-[30px] sm:px-[32px] sm:pt-[40px] lg:px-[30px] ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
                onClick={e => e.stopPropagation()}
            >
                <div className='flex items-center sm:justify-between h-[52px]'>
                    <Link href='/'>
                        <Avatar
                            className='absolute top-4 left-0 right-0 sm:relative sm:top-0 mx-auto sm:mx-0 w-[52px] h-[52px] lg:w-[70px] lg:h-[70px]'
                            alt='settings menu logo'
                            src=''
                        />
                    </Link>
                    <button
                        className='m-0 bg-none lg:hidden'
                        onClick={setIsOpen}
                    >
                        <Image
                            src='/icons/close.svg'
                            width={15}
                            height={15}
                            alt='close icon'
                        />
                    </button>
                </div>
                <nav className='flex flex-col gap-5'></nav>
                {children}
            </div>
        </div>
    );
};

export default BurgerMenuWrapper;
