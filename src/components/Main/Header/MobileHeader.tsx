import React from 'react';
import Link from 'next/link';
import Avatar from '@/components/Avatar';
import type { OpenMenuProps } from '@/types/main';
import BurgerButton from '@/components/Header/BurgerButton';

const MobileHeader = ({ isOpen, setIsOpen }: OpenMenuProps) => {
    return (
        <div className='relative flex-grow gap-0 sm:gap-7 flex justify-center items-center md:hidden'>
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <Link href={'/'} className={`flex justify-center`}>
                <Avatar size={52} alt='header logo' src='' />
            </Link>
        </div>
    );
};

export default MobileHeader;
