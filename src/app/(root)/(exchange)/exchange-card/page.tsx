import ExchangeInfo from '@/components/exchange/exchange-card/page';

const ExchangeInfoPage = () => {
    return (
        <div className='px-[16px] pt-[100px] md:pt-[118px] sm:pt-[100px] '>
            <ExchangeInfo buttonLink='/exchange-payment' />
        </div>
    );
};

export default ExchangeInfoPage;
