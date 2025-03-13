import React from 'react';

const BackgroundCircles = () => {
    return (
        <div className="absolute inset-0 flex justify-center items-center translate-y-[119px]">
            <svg
                width="1920"
                height="877"
                viewBox="0 0 1920 877"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0"
            >
                <circle cx="959.5" cy="1034.5" r="1034" stroke="#CFCEDB" />
            </svg>

            <svg
                width="1490"
                height="555"
                viewBox="0 0 1490 555"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[322px]"
            >
                <circle cx="745" cy="745" r="744.5" stroke="#CFCEDB" />
            </svg>

            <svg
                width="823"
                height="233"
                viewBox="0 0 823 233"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-[644px]"
            >
                <circle cx="411.5" cy="411.5" r="411" stroke="#CFCEDB" />
            </svg>
        </div>
    );
};

export default BackgroundCircles;