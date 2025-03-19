import { exchangeData } from './constants';
import { ThemedText } from '@/components/ThemedText';
import Arrow from '@/assets/icons/Arrow';
import { Exchange } from './constants';

function ExchangeItem({ item }: { item: Exchange }) {
    return (
        <div className='relative flex w-full h-[60px] flex-col lg:flex-row items-center mb-20 lg:mb-0'>
            {/* Стрілка точно по центру */}
            <div className='absolute  left-1/2 top-15  lg:top-1/2 md:top-18 sm:top-16 -translate-x-1/2 -translate-y-1/2'>
                <Arrow className='fill-black' />
            </div>

            {/* Ліва частина */}
            <div className='flex-1 flex justify-end items-center text-center lg:text-start pr-[0] pb-[30px] lg:pr-[60px] lg:pb-[0] '>
                <div className='flex flex-col'>
                    <ThemedText type='text'>
                        {item.from} {item.fromChain}
                    </ThemedText>
                    <ThemedText type='text_blue'>{item.fromAddress}</ThemedText>
                </div>
            </div>

            {/* Невидимий центральний елемент для розділення */}
            <div className='w-0'></div>

            {/* Права частина */}
            <div className='flex-1 flex justify-start items-center text-center lg:text-start pl-[0] lg:pl-[60px]'>
                <div className='flex flex-col'>
                    <ThemedText type='text'>
                        {item.toAccount} {item.to}
                    </ThemedText>
                    <ThemedText type='text_blue'>{item.rate}</ThemedText>
                </div>
            </div>
        </div>
    );
}

export function ExchangeData() {
    return (
        <div>
            <ExchangeItem item={exchangeData[0]} />
        </div>
    );
}

export default ExchangeData;
