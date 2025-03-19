import ExchangePayment from '@/components/exchange/exchange-payment/page';

const ExchangePaymentPage = () => {
    return (
        <div className='min-h-screen flex flex-col pt-[120px] sm:border sm:border-[#CFCEDB] lg:border-0 rounded-[20px] max-lg:px-[47px] max-sm:px-0 max-lg:pt-[106px] max-sm:pt-[19px]'>
            <ExchangePayment buttonLink='/main/exchange-payment-confirm' />
        </div>
    );
};

export default ExchangePaymentPage;
