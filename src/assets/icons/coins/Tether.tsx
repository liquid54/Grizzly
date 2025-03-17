import React from 'react';
import Image from 'next/image';

const Tether = () => {
    return (
        <div className='relative w-[174.20328113393157px] h-[174.20328113393157px]'>
            <Image
                src='/Tether.png'
                alt='Tether'
                className='object-contain'
                style={{ transform: 'rotate(11.68deg)' }}
                fill
                sizes='4096px'
                priority
            />
        </div>
    );
};

export default Tether;
