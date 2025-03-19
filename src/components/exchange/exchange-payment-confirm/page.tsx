import { ThemedText } from '@/components/ThemedText';
import Input from '@/components/Input';
import Link from 'next/link';
import Button from '@/components/Button';
import Google from '@/assets/icons/Google';
import Apple from '@/assets/icons/Apple';

const PaymentConfirm = ({ buttonLink = '' }: { buttonLink?: string }) => {
    return (
        <>
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
                    className='text-center max-w-[1214px]'
                >
                    Please transfer the specified amount to the provided
                    cryptocurrency wallet address. Once the transaction is
                    confirmed on the network, the exchange will be processed
                    automatically. Dont forget to account for the network fee to
                    ensure the transferred amount matches your request.
                </ThemedText>
            </div>
            <div className='flex flex-col gap-y-[30px] pt-[30px] items-center'>
                <Input
                    label={'Card number'}
                    placeholder={'Write your card here'}
                />
                <Input
                    label={'Card holder`s name'}
                    placeholder={'Write your name here'}
                />
                <Input label={'Date'} placeholder={'MM/YY'} />
                <Input
                    label={'CVV Code'}
                    placeholder={'Write your CVV code here'}
                />
                <div className='w-full flex justify-center'>
                    <Link
                        href={buttonLink}
                        className='w-full sm:w-auto max-w-[500px]'
                    >
                        <Button size='medium'>Pay</Button>
                    </Link>
                </div>
                <div className='w-full max-sm:max-w-[500px] mx-auto flex justify-center gap-x-[8px] pb-[10px]'>
                    <Button
                        size='medium'
                        variant='secondary'
                        className=' border-gray-400 font-semibold'
                    >
                        <div className='flex flex-row justify-center items-center gap-x-[10px] '>
                            <div>
                                <Apple />
                            </div>
                            <ThemedText title='text_exchange'>
                                Apple Pay
                            </ThemedText>
                        </div>
                    </Button>
                    <Button
                        size='medium'
                        variant='secondary'
                        className='border-gray-400 font-semibold'
                    >
                        <div className='flex flex-row justify-center items-center  gap-x-[10px]'>
                            <Google />
                            <ThemedText title='text_exchange'>
                                Google Pay
                            </ThemedText>
                        </div>
                    </Button>
                </div>
            </div>
        </>
    );
};

export default PaymentConfirm;
