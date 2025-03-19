import Avatar from '@/components/Avatar';
import Button from '@/components/Button';
import ForbiddenLayout from '@/components/layouts/ForbiddenLayout';
import { ThemedText } from '@/components/ThemedText';
import Link from 'next/link';

export default function NotFound() {
    return (
        <ForbiddenLayout>
            <div
                className={
                    'flex flex-col z-[1] justify-center items-center gap-[10px] px-4 w-full max-w-[600px] m-auto'
                }
            >
                <Avatar
                    size={312}
                    alt='header logo'
                    src=''
                    className='w-[220px] h-[220px] sm:h-[312px] sm:w-[312px]'
                />
                <ThemedText
                    type='empty'
                    className='text-[60px] font-semibold text-brown-100 font-unbounded'
                >
                    404
                </ThemedText>
                <ThemedText className='text-gray-200 text-center'>
                    Oops, we couldn`t find this page
                </ThemedText>
                <Link href='/' className='pt-[20px] w-full sm:w-fit'>
                    <Button size='xl'>Okay</Button>
                </Link>
            </div>
        </ForbiddenLayout>
    );
}
