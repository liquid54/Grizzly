import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ThemedText } from '@/components/ThemedText';

interface SettingsButtonProps {
    href: string;
    isActive: boolean;
    label: string;
    onClick?: () => void;
    src: string;
    width: number;
    height: number;
}

const SettingsMenuButton = ({
    href,
    label,
    isActive,
    onClick,
    src,
    width,
    height,
}: SettingsButtonProps) => {
    return (
        <Link
            href={href}
            className={`flex items-center gap-4 ${isActive ? 'text-blue-300' : ''}`}
            onClick={onClick}
        >
            <div
                className={`w-[46px] h-[46px] lg:w-[70px] lg:h-[70px] transition flex justify-center items-center rounded-2xl lg:rounded-xl ${isActive ? 'bg-blue-300' : 'border border-white-200'}`}
            >
                <Image width={width} height={height} src={src} alt={label} />
            </div>
            <ThemedText className='lg:hidden'>{label}</ThemedText>
        </Link>
    );
};

export default SettingsMenuButton;
