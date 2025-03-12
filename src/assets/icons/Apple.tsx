import React from 'react';
import Image from "next/image";

const Apple = () => {
    return (
        <div className="relative w-[36px] h-[36px]">
            <Image
                src="/AppleIcon.png"
                alt="Apple"
                width={814}
                height={1000}
            />
        </div>
    );
};

export default Apple;