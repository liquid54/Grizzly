import ExchangeConfirm from '@/components/exchange/exchange-confirm/page';

const ExchangeConfirmPage = () => {
    return (
        <div className='min-h-screen flex flex-col pt-[90px] sm:border sm:border-[#CFCEDB] lg:border-0 rounded-[20px] max-lg:pt-[120px] max-sm:pt-[20px]'>
            <ExchangeConfirm buttonLink='/main/exchange-failed' />
        </div>
    );
};

export default ExchangeConfirmPage;
