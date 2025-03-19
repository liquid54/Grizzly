import Image from 'next/image';
import { ThemedText } from '@/components/ThemedText';
import Link from 'next/link';
import Button from '@/components/Button';
import CrossIcon from '@/assets/icons/cross';

const ExchangeFailed = () => {
    return (
        <div className='flex flex-col items-center gap-y-[30px]'>
            <div className='w-[220px]'>
                <div className='relative'>
                    <Image
                        width={1920}
                        height={1080}
                        src='/IMG_5815 (1).png'
                        alt='logo'
                        className='rounded-full w-[220px] h-[220px] object-cover z-0'
                    />
                </div>

                {/* Використовуємо flex для розташування кнопки */}
                <div className='flex justify-end -mt-16 z-10 relative'>
                    <div className='flex items-center justify-center bg-[#DB1529] w-[72px] h-[72px] rounded-full'>
                        <CrossIcon />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-[10px] items-center'>
                <ThemedText type='title_exchange' className='text-center'>
                    Exchange failed!
                </ThemedText>
                <ThemedText
                    title='text_exchange'
                    className='text-center max-w-[1180px]'
                >
                    Unfortunately, an error occurred during the cryptocurrency
                    exchange. This may be caused by temporary technical issues
                    or incorrect data input. Please check the provided details
                    and try again. If the issue persists, contact our support
                    team for prompt assistance.
                </ThemedText>
            </div>
            <div className='w-full flex flex-col sm:flex-row gap-[10px] sm:gap-[20px] items-center justify-center'>
                <Link href='' className='w-full sm:w-auto max-w-[400px]'>
                    <Button variant='blue' size='medium'>
                        Cancel
                    </Button>
                </Link>
                <Link href='' className='w-full sm:w-auto max-w-[400px]'>
                    <Button size='medium'>Retry</Button>
                </Link>
            </div>
        </div>
    );
};
export default ExchangeFailed;
