import React from 'react';
import TetherIcon from "@/assets/icons/tether";
import Pumb from "@/assets/icons/Pumb";
import Arrow from "@/assets/icons/Arrow";
import {ThemedText} from "@/components/ThemedText";

type SelectorProps = {
    type?: 'crypto' | 'bank';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon?: React.ComponentType<any>;
    label?: string;
    className?: string;
    containerClass?: string;
};

const Selector = ({
                      type = 'crypto',
                      icon: CustomIcon,
                      label,
                      className = '',
                      containerClass = '',
                  }: SelectorProps) => {
    const Icon = CustomIcon || (type === 'crypto' ? TetherIcon : Pumb);
    const selectorLabel = label || (type === 'crypto' ? 'Tether (TRC-20) USDT' : 'ПУМБ');

    return (
        <div className={`flex flex-col space-y-[6px] w-full max-w-[500px] ${containerClass}`}>
            {label && <ThemedText type='subtitle'>{label}</ThemedText>}
            <div className={`relative bg-gray-400 border border-white-200 rounded-[16px] w-full ${className}`}>
                <div
                    className='flex flex-row items-center justify-between px-[14px] sm:px-[31px] py-[11px] sm:py-[21px]'>
                    <div className='flex space-x-[20px] items-center'>
                        <div className='flex h-[21px] w-[21px] md:h-full md:w-full items-center'><Icon/></div>
                        <div className="lg:max-w-[336px] md:max-w-[248px] max-w-[267px]">
                            <ThemedText type='text-select' className='truncate text-left'>{selectorLabel}</ThemedText>
                        </div>
                    </div>
                    <Arrow className="fill-black"/>
                </div>
            </div>
        </div>
    );
};

export default Selector;