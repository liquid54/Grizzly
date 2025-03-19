import Input from '@/components/Input';
import Button from '@/components/Button';
import Link from 'next/link';
import ExchangeDescription from '@/components/exchange/ExchangeInfo';

const ExchangeInfo = ({ buttonLink = '' }: { buttonLink?: string }) => {
    return (
        <>
            <ExchangeDescription />
            <div className='flex flex-col items-center gap-y-[30px] pt-[30px] '>
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
                <div className='w-full  flex justify-center'>
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

export default ExchangeInfo;
