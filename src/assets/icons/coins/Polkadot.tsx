import React from 'react';
import Image from "next/image";

const Tron = () => {
    return (
        <div className="relative w-[172.03825670809562px] h-[172.03825670809562px]">
            <Image
                src="/Polkadot.png"
                alt="Polkadot"
                className="object-contain"
                style={{ transform: 'rotate(-23.9deg)' }}
                fill
                sizes="4096px"
                priority
            />
        </div>
    );
};

export default Tron;