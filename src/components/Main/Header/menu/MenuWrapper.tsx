import Avatar from '@/components/Avatar';
import type { OpenMenuProps } from '@/types/main';
import React, { type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MenuProps extends OpenMenuProps {
    children: ReactNode;
    isMain?: boolean;
}
const BurgerMenuWrapper = ({
                               isOpen,
                               setIsOpen,
                               children,
                               isMain = true,
                           }: MenuProps) => {
    return (
        <div
            className={`fixed z-50 top-0 left-0 h-full lg:hidden ${isMain ? '' : 'md:hidden'}  ${isOpen ? 'bg-dark-50 w-full' : 'bg-none w-0'}`}
            onClick={setIsOpen}
        >
            <div
                className={`transition-transform duration-300 h-full w-full xs:w-80 items-center gap-[30px] bg-white pt-4 px-4 pb-12 sm:py-[30px] sm:px-[32px] sm:pt-[40px] ${isOpen ? 'translate-x-0' : '-translate-x-full overflow-hidden'}`}
                onClick={e => e.stopPropagation()}
            >
                <div className='flex items-center sm:justify-between h-[52px]'>
                    <Link href='/'>
                        <Avatar
                            className='absolute top-4 left-0 right-0 sm:relative sm:top-0 mx-auto sm:mx-0 w-[52px] h-[52px]'
                            alt='settings menu logo'
                            src=''
                        />
                    </Link>
                    <button
                        className='m-0 bg-none'
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
                {children}
            </div>
        </div>
    );
};

export default BurgerMenuWrapper;