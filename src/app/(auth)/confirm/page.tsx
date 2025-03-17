'use client';
import Input from '@/components/Input';
import { ThemedText } from '@/components/ThemedText';
import Button from '@/components/Button';
import Link from 'next/link';
import Avatar from '@/components/Avatar';

const Confirm = () => {
    return (
        <div className='flex flex-col gap-y-[20px] items-center'>
            <div className='flex flex-col gap-y-[10px] items-center justify-center pb-[10px]'>
                <div className='flex flex-col items-center'>
                    <Avatar
                        size={100}
                        src='/IMG_5815 (1).png'
                        alt='logo'
                        className='w-[90px] h-[90px] md:w-[100px] md:h-[100px]'
                    />
                    <ThemedText
                        type='empty'
                        className='font-semibold text-brown-100 text-center font-unbounded text-[24px] sm:text-[36px]'
                    >
                        Security screening requirements
                    </ThemedText>
                </div>
                <ThemedText className='text-gray-200 text-center'>
                    To continue, you must complete all of the verifications
                    {/* listed below. */}
                </ThemedText>
            </div>

            <Input
                label={'Email confirmation code'}
                requiredMark='*'
                placeholder={'Write your code'}
                className='w-full'
            />
            <Input
                label={'Authenticator app'}
                requiredMark='*'
                placeholder={'Write your code'}
                className='w-full'
            />
            <Link href='/main' className='pt-[10px] w-full sm:w-fit'>
                <Button size='xl'>Continue</Button>
            </Link>
        </div>
    );
};

export default Confirm;
