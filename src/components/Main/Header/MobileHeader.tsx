import React from 'react';
import BurgerButton from './BurgerButton';
import Link from 'next/link';
import Avatar from '@/components/Avatar';
import type { OpenMenuProps } from '@/types/main';

const MobileHeader = ({ isOpen, setIsOpen, isMain }: OpenMenuProps & {isMain: boolean}) => {
    return (
        <div className='flex-grow gap-0 sm:gap-7 flex items-center lg:hidden md:hidden'>
            <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <Link
                href={'/'}
                className={`-ml-[25.5px] ${isMain ? 'sm:ml-0' : 'md:ml-0'} flex-grow ${isMain ? 'sm:flex-grow-0' : 'md:flex-grow-0'} flex justify-center`}
            >
                <Avatar size={52} alt='header logo' src=''/>
            </Link>
        </div>
    );
};

export default MobileHeader;
