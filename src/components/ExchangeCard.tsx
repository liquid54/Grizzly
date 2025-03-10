// components/ExchangeCard.tsx
import React from 'react';
import TetherIcon from "@/assets/icons/tether";
import Pumb from "@/assets/icons/Pumb";
import {ExchangeData} from "@/components/constants";
import {ThemedText} from "@/components/ThemedText";

interface ExchangeCardProps {
    exchange: ExchangeData;
}

const ExchangeCard = ({ exchange }: ExchangeCardProps) => {
    const { from, to, rate } = exchange;

    return (
        // <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm min-w-[250px] border border-gray-100">
        <div className="flex items-center justify-between border-1 border-[#CFCEDB] rounded-[16px] gap-[19px]">
            <div className="flex items-center gap-[15px] px-[30px] py-[22px]">
                <div className="flex -space-x-2">
                    {/* Накладаємо іконки з негативним margin */}
                    <div className="z-10">
                        <TetherIcon />
                    </div>
                    <div className="z-20">
                        <Pumb/>
                    </div>
                </div>
                <div className='flex flex-col gap-[5px] justify-center whitespace-nowrap'>
                    <ThemedText type='title_exchange'>{rate}</ThemedText>
                    <ThemedText type='text_exchange'>{from} 🠞 {to}</ThemedText>
                </div>
            </div>

        </div>
    );
};

export default ExchangeCard;