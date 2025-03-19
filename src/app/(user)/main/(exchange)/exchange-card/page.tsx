import ExchangeInfo from '@/components/exchange/exchange-card/page';

const ExchangeInfoPage = () => {
    return (
        <div className='min-h-screen flex flex-col pt-[80px] sm:border sm:border-[#CFCEDB] rounded-[20px] lg:border-0 max-lg:pt-[70px] max-sm:pt-[100px] '>
            <ExchangeInfo buttonLink='/main/exchange-payment' />
        </div>
    );
};

export default ExchangeInfoPage;
