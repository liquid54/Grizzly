import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from 'next/link';
import ExchangeDescription from '@/components/exchange/ExchangeInfo';

const ExchangeConfirm = ({ buttonLink = '' }: { buttonLink?: string }) => {
    return (
        <>
            <ExchangeDescription />
            <div className='flex flex-col gap-y-[30px] pt-[30px] items-center justify-center'>
                <Input
                    label='Whatsapp'
                    placeholder='Confirm your Whatsapp'
                    className='w-full'
                />
                <Input
                    label='Telegram'
                    placeholder='Confirm your Telegram'
                    className='w-full'
                />
                <Input
                    label='Confirm your email'
                    placeholder='Write your code'
                    resendText='Send code again'
                    className='w-full'
                />
                <div className='w-full flex justify-center'>
                    <Link
                        href={buttonLink}
                        className='w-full sm:w-auto max-w-[500px]'
                    >
                        <Button size='medium'>Continue</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ExchangeConfirm;
