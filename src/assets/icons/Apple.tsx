import React from 'react';
import Image from 'next/image';

const Apple = () => {
    return (
        <div className='relative w-[30px] h-[30px] sm:w-[36px] sm:h-[36px]'>
            <Image src='/Apple.png' alt='Apple' width={814} height={1000} />
        </div>
    );
};

export default Apple;
