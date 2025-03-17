import React from 'react';
import Image from "next/image";

const Google = () => {
    return (
        <div className="relative w-[36px] h-[36px]">
            <Image
                src="/GoogleIcon.png"
                alt="Google"
                width={800}
                height={800}
            />
        </div>
    );
};

export default Google;