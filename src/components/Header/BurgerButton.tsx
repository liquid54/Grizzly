'use client';
import type { OpenMenuProps } from '@/types/main';

const BurgerButton = ({ isOpen, setIsOpen }: OpenMenuProps) => {
    return (
        <button
            className='relative flex flex-col gap-[5.7px] w-[25.5px] h-[16.56px]'
            onClick={setIsOpen}
        >
            <div
                className={`bg-black h-[1.42px] w-[25.5px] transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-[8.5px]'}`}
            />
            <div
                className={`bg-black h-[1.42px] w-[25.5px] transition-transform duration-300 ${isOpen ? 'translate-x-[4.25px]' : 'translate-x-[4.25px]'}`}
            />
            <div
                className={`bg-black h-[1.42px] w-[25.5px] transition-transform duration-300 ${isOpen ? 'translate-x-[8.5px]' : 'translate-x-0'}`}
            />
        </button>
    );
};

export default BurgerButton;
