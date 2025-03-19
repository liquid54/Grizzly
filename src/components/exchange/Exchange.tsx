import Selector from '@/components/Selector';
import Input from '@/components/Input';
import { ThemedText } from '@/components/ThemedText';
import Change from '@/assets/icons/Change';
import Agreement from '@/components/Agreement';
import Button from '@/components/Button';
import Link from 'next/link';

const Exchange = ({
    fullWidthButton = false,
    fullWindow = false,
    visibleBorder = false,
    buttonLink = '',
    ...props
}) => {
    return (
        <div
            className={`flex flex-col ${visibleBorder ? 'md:border md:border-[#CFCEDB] md:rounded-[18px] md:p-[24px]' : ''}`}
            {...props}
        >
            <div className=' space-y-[20px] '>
                {fullWindow ? (
                    <div className='flex flex-col gap-y-[10px]'>
                        <div className='flex flex-col sm:flex-row  gap-[16px] sm:gap-[20px]'>
                            <Selector
                                type='crypto'
                                className='w-full sm:min-w-[405px]'
                            />
                            <Input type='crypto' className='w-full' />
                        </div>
                        <div>
                            <ThemedText type='text_exchange'>
                                Minimum exchange amount -{' '}
                            </ThemedText>
                            <ThemedText type='text_blue'>30 USDT</ThemedText>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='space-y-[20px]'>
                            <Selector
                                type='crypto'
                                className='w-full sm:min-w-[405px]'
                            />
                            <Input type='crypto' className='w-full' />
                        </div>
                        <div>
                            <ThemedText type='text_exchange'>
                                Minimum exchange amount -{' '}
                            </ThemedText>
                            <ThemedText type='text_blue'>30 USDT</ThemedText>
                        </div>
                    </>
                )}

                <div className='flex justify-center items-center'>
                    <button className='flex items-center justify-center w-[52px] h-[52px] bg-blue-100 rounded-full'>
                        <Change />
                    </button>
                </div>

                <div
                    className={`${fullWindow ? 'flex flex-col  sm:flex-row gap-[16px] md:gap-[20px] ' : 'space-y-[20px]'}`}
                >
                    <Selector type='bank' className='w-full sm:min-w-[405px]' />
                    <Input type='bank' className='w-full' />
                </div>

                <Agreement />
                <div className={fullWidthButton ? '' : 'flex justify-center'}>
                    <Link href={buttonLink}>
                        <Button
                            size='mid_large'
                            className={fullWidthButton ? 'w-full' : ''}
                        >
                            Exchange
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Exchange;
