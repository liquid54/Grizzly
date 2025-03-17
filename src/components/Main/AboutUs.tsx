import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";


const AboutUs = () => {
    return (
        <div
            className='flex flex-col md:flex-row justify-between md:border md:border-[#CFCEDB] md:rounded-[30px] items-center md:px-[30px]'>
            <div className='lg:pr-[47px] md:pr-[67px]'>
                <div className="relative lg:w-[336px] lg:h-[510px] md:w-[280px] md:h-[425px] w-[205px] h-[312px]">
                    <Image
                        src="/GroupCoins.png"
                        alt="GroupCoins"
                        className="object-contain"
                        width='511'
                        height='336'
                    />
                </div>
            </div>

            <div className='flex flex-col md:gap-y-[40px] gap-y-[16px] md:order-first md:max-w-[440px] lg:max-w-[570px] lg:py-[76.5px] md:py-[50px]'>
                <div className='flex flex-col md:gap-y-[10px] gap-y-[16px] lg:pt-[10px]'>
                    <ThemedText type='title' className="text-center md:text-left">About us</ThemedText>
                    <ThemedText type='text-main'>Lorem ipsum dolor sit amet consectetur. Mi cras aliquam dui sagittis id dignissim
                        interdum. Purus sed viverra facilisis bibendum facilisis risus. Diam et diam vel magna arcu.
                        Nisi nulla non dolor rhoncus etiam aliquam. Sit sapien sit posuere at sodales volutpat quisque.
                        Senectus enim ut sed turpis in pretium pharetra morbi. Lacinia sed congue consequat molestie sed
                        sit massa erat.</ThemedText>
                </div>
                    <Button size='small'>Get started</Button>
            </div>
        </div>
    )
}


export default AboutUs;