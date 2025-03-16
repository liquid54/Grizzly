import Avatar from '@/components/Avatar';
import Box from '@/components/Box';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { ThemedText } from '@/components/ThemedText';
import Image from 'next/image';
import React from 'react';

const Settings = () => {
    return (
        <div className='w-full h-full flex flex-col gap-[30px] xs:rounded-2xl xs:border xs:border-white-200 lg:border-0 xs:p-[30px] xs:pt-[39px] lg:pt-0 lg:p-0'>
            <div className='w-full flex flex-col gap-5 md:gap-[30px] lg:gap-5'>
                <ThemedText
                    type='title_poppins'
                    className='text-[24px] lg:text-[34px] leading-none'
                >
                    Profile Settings
                </ThemedText>
                <div className='relative w-fit'>
                    <Avatar
                        alt='user avatar'
                        size={140}
                        src='/mock-avatar.jpeg'
                    />
                    <Button
                        variant='text'
                        size='text'
                        className='absolute bottom-0 right-3'
                    >
                        <Image
                            alt='edit avatar'
                            src='/icons/editAvatar.svg'
                            width={30}
                            height={30}
                        />
                    </Button>
                </div>
            </div>

            <div className='grid gap-[30px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1560px]'>
                <Input
                    label='Name'
                    placeholder='Enter your name'
                    value='Erick'
                    containerClass='max-w-full'
                />
                <Input
                    label='Surname'
                    placeholder='Enter your surname'
                    value='Kartmeno'
                    containerClass='max-w-full'
                />
                <Input
                    label='Telegram'
                    placeholder='Enter your Telegram'
                    value='@EricKartmeno'
                    containerClass='max-w-full'
                />
                <Input
                    label='Whatsapp'
                    placeholder='Enter your Whatsapp'
                    value='+380 77 007 07 07'
                    containerClass='order-5 xl:order-none max-w-full'
                />
                <Input
                    label='Email'
                    placeholder='Enter your email'
                    value='somemail@gmail.com'
                    containerClass='order-4 xl:order-none max-w-full'
                />
            </div>

            <Box type='column' className='pt-5 lg:pt-12 gap-[30px] lg:gap-5'>
                <ThemedText
                    type='title_poppins'
                    className='text-[24px] lg:text-[34px] leading-none'
                >
                    Change password
                </ThemedText>
                <div className='grid gap-[30px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-[1560px]'>
                    <Input
                        label='Current password'
                        placeholder='Enter your name'
                        inputType='password'
                        containerClass='max-w-full md:max-w-[500px]'
                    />
                    <Input
                        label='New password'
                        placeholder='Write new password'
                        inputType='password'
                        containerClass='max-w-full md:max-w-[500px]'
                    />
                    <Input
                        label='Repeat password'
                        placeholder='Repeat new password'
                        inputType='password'
                        containerClass='max-w-full md:max-w-[500px]'
                    />
                </div>
            </Box>

            <Button
                size='xl'
                variant='primary'
                className='mt-0 md:mt-5 lg:mt-20 sm:mx-auto lg:mx-0 '
            >
                Save changes
            </Button>
        </div>
    );
};

export default Settings;
