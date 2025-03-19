import ExchangeConfirm from '@/components/exchange/exchangeconfirm/page';

const ExchangeConfirmPage = () => {
    return (
        <div className='min-h-screen flex flex-col pt-[106px] sm:border sm:border-[#CFCEDB] lg:border-0 rounded-[20px] px-[16px]'>
            <ExchangeConfirm buttonLink='/main/exchange-card' />
        </div>
    );
};

export default ExchangeConfirmPage;
