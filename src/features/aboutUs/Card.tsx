
import React, {ReactNode} from "react";
import {ThemedText} from "@/components/ThemedText";

type CardProps = {
    icon: ReactNode;
    title: string;
    description: string;
};

const Card = ({ icon, title, description}: CardProps) => {
    return (
        <div className="flex flex-col items-start p-[30px] space-y-[20px] border border-white-200 rounded-[20px]">
            <div className='bg-gradient-to-br from-blue-100 to-blue-200 rounded-full p-[22px] items-center justify-center'>
                {icon}
            </div>
            <div className='flex flex-col space-y-[10px]'>
                <ThemedText type='subtitle' className="text-[36px]">{title}</ThemedText>
                <ThemedText type='text' className="text-[16px]">{description}</ThemedText>
            </div>
        </div>
    );
};

export default Card;
