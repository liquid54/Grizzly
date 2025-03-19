import { ThemedText } from '@/components/ThemedText';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Link from 'next/link';

const ExchangePayment = ({ buttonLink = '' }: { buttonLink?: string }) => {
    return (
        <div className='flex flex-col space-y-[30px] items-center justify-center '>
            <div className='flex flex-col space-y-[10px] items-center'>
                <ThemedText type='title_exchange' className='text-center'>
                    Payment of the order
                </ThemedText>
                <ThemedText type='subtitle_blue'>58:10</ThemedText>
                <ThemedText type='subtitle' className='text-[18px]'>
                    Pay within one hour
                </ThemedText>
                <ThemedText
                    type='text_exchange'
                    className='text-center max-w-[1180px]'
                >
                    Please transfer the specified amount to the provided
                    cryptocurrency wallet address. Once the transaction is
                    confirmed on the network, the exchange will be processed
                    automatically. Dont forget to account for the network fee to
                    ensure the transferred amount matches your request.
                </ThemedText>
            </div>
            <div className='flex justify-center items-center w-full'>
                <Input
                    value='TQpB4CmDkZ6s8H1rJ7k2N9Xm'
                    showCopyIcon={true}
                    className='items-center'
                />
            </div>
            <Link href={buttonLink}>
                <Button size='mid_large'>Exchange</Button>
            </Link>
        </div>
    );
};

export default ExchangePayment;
