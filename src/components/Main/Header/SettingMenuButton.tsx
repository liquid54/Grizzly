import Link from 'next/link';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';

interface SettingsTextProps {
    href: string;
    isActive: boolean;
    label: string;
    onClick?: () => void;
}

const SettingsMenuText = ({
                                href,
                                label,
                                isActive,
                                onClick,
                            }: SettingsTextProps) => {
    return (
        <Link
            href={href}
            className={`flex items-center gap-4 ${isActive ? 'text-blue-300' : ''}`}
            onClick={onClick}
        >
            <ThemedText className='lg:hidden'>{label}</ThemedText>
        </Link>
    );
};

export default SettingsMenuText;