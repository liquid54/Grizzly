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
};

const Selector = ({
                      type = 'crypto',
                      icon: CustomIcon,
                      label,
                      className = '',
                      ...props
                  }: SelectorProps) => {
    const Icon = CustomIcon || (type === 'crypto' ? TetherIcon : Pumb);
    const selectorLabel = label || (type === 'crypto' ? 'Tether (TRC-20) USDT' : 'ПУМБ');

    return (
        <div className={`gap-6 bg-[#F0F0F3] border-1 border-[#CFCEDB] rounded-[16px] ${className}`} {...props}>
            <div className='flex flex-row items-center justify-between px-[30px] py-[18px] '>
                <div className='flex space-x-[20px] items-center'>
                    <Icon />
                    <ThemedText type='text_bold'>{selectorLabel}</ThemedText>
                </div>
                <Arrow className="fill-black"/>
            </div>
        </div>
    );
};

export default Selector;