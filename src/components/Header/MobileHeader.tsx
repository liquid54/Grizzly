import React from 'react';
import BurgerButton from './BurgerButton';
import Link from 'next/link';
import Avatar from '@/components/Avatar';
import type { OpenMenuProps } from '@/types/main';

const MobileHeader = ({ isOpen, setIsOpen }: OpenMenuProps) => {
    return (
        <div className='relative flex-grow gap-0 sm:gap-7 flex justify-center sm:justify-start items-center lg:hidden'>
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <Link href={'/'} className={`sm:ml-12 flex justify-center`}>
                <Avatar size={52} alt='header logo' src='' />
            </Link>
        </div>
    );
};

export default MobileHeader;
