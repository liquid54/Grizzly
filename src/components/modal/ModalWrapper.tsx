import Image from 'next/image';
import { ReactNode } from 'react';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
}: ModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className='fixed inset-0 bg-dark-50 flex items-center justify-center z-50 p-4'
            onClick={onClose}
        >
            <div
                className='bg-white px-4 py-5 sm:p-7 rounded-lg shadow-lg max-w-[556px] w-full relative'
                onClick={e => e.stopPropagation()}
            >
                <div className='flex items-center justify-between'>
                    <h2 className='text-[24px] sm:text-[34px] text-brown-100 font-semibold font-poppins'>
                        {title}
                    </h2>
                    <button className='cursor-pointer p-2' onClick={onClose}>
                        <Image
                            width={15}
                            height={15}
                            alt='close icon'
                            src='/icons/close.svg'
                        />
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
