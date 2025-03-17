import React from 'react';
import Image from "next/image";

const Tron = () => {
    return (
        <div className="relative w-[172.33691375532547px] h-[172.33691375532547px]">
            <Image
                src="/Tron.png"
                alt="Tron"
                className="object-contain"
                style={{ transform: 'rotate(-33deg)' }}
                fill
                sizes="4096px"
                priority
            />
        </div>
    );
};

export default Tron;