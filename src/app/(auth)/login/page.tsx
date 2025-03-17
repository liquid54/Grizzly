import Input from '@/components/Input';
import { ThemedText } from '@/components/ThemedText';
import Button from '@/components/Button';
import Link from 'next/link';
import Avatar from '@/components/Avatar';

const SignUp = () => {
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
                        className='font-semibold text-brown-100 font-unbounded text-[24px] sm:text-[36px]'
                    >
                        Log In
                    </ThemedText>
                </div>
                <div className='flex flex-row gap-x-[10px] items-center'>
                    <ThemedText className='text-gray-200'>
                        Don’t have an account?
                    </ThemedText>
                    <Link href='/signup'>
                        <ThemedText type='link_text'>Sign Up</ThemedText>
                    </Link>
                </div>
            </div>

            <Input
                label={'Email'}
                requiredMark='*'
                placeholder={'Write your email'}
                className='w-full'
            />
            <div className='flex flex-col gap-y-[6px] w-full'>
                <Input
                    label={'Password'}
                    requiredMark='*'
                    placeholder={'Write your password'}
                    className='w-full'
                />
                <Button variant='text' size='text' className='w-fit'>
                    Show password
                </Button>
            </div>
            <Link href='/confirm' className='pt-[10px] w-full sm:w-fit'>
                <Button size='xl'>Log In</Button>
            </Link>
        </div>
    );
};

export default SignUp;
