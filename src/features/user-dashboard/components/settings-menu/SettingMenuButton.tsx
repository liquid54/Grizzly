import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ThemedText } from '@/components/ThemedText';

interface SettingsButtonProps {
    href: string;
    src: string;
    isActive: boolean;
    label: string;
    width: number;
    height: number;
    onClick?: () => void;
}

const SettingsMenuButton = ({
    href,
    src,
    label,
    isActive,
    width,
    height,
    onClick,
}: SettingsButtonProps) => {
    return (
        <Link
            href={href}
            className={`flex items-center gap-4`}
            onClick={onClick}
        >
            <div
                className={`w-[46px] h-[46px] lg:w-[70px] lg:h-[70px] transition flex justify-center items-center rounded-2xl lg:rounded-xl ${isActive ? 'bg-blue-300' : 'border border-gray-100'}`}
            >
                <Image width={width} height={height} src={src} alt={label} />
            </div>
            <ThemedText className='lg:hidden'>{label}</ThemedText>
        </Link>
    );
};

export default SettingsMenuButton;
