import React from 'react';
import Image, { ImageProps } from 'next/image';

interface AvatarProps extends ImageProps {
    height?: number;
    width?: number;
    size?: number;
    alt: string;
}

const Avatar = ({ size = 70, alt, src, className, ...props }: AvatarProps) => {
    const image = src || '/IMG_5815 (1).png';
    return (
        <Image
            className={`rounded-full overflow-hidden object-contain shrink-0 ${className || ''}`}
            alt={alt}
            height={size}
            width={size}
            src={image}
            {...props}
        />
    );
};

export default Avatar;
