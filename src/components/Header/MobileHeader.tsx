import React from 'react';
import BurgerButton from './BurgerButton';
import Link from 'next/link';
import Avatar from '../Avatar';
import type { OpenMenuProps } from '@/types/main';

const MobileHeader = ({ isOpen, setIsOpen }: OpenMenuProps) => {
    return (
        <div className='flex-grow gap-0 sm:gap-7 flex items-center justify-center sm:justify-start lg:hidden'>
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <Link href={'/'} className='flex sm:ml-12 justify-center'>
                <Avatar size={52} alt='header logo' src='' />
            </Link>
        </div>
    );
};

export default MobileHeader;
