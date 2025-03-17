import React from 'react';
import Image from "next/image";

const XRP = () => {
    return (
        <div className="relative w-[169.56319043869124px] h-[169.56319043869124px]">
            <Image
                src="/XRP.png"
                alt="XRP"
                className="object-contain"
                style={{ transform: 'rotate(44.42deg)' }}
                fill
                sizes="4096px"
                priority
            />
        </div>
    );
};

export default XRP;