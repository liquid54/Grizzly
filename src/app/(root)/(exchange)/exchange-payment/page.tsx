import ExchangePayment from '@/components/exchange/exchange-payment/page';

const ExchangePaymentPage = () => {
    return (
        <div className='px-[16px] pt-[100px] md:pt-[118px] sm:pt-[100px] '>
            <ExchangePayment buttonLink='/exchange-payment-confirm' />
        </div>
    );
};

export default ExchangePaymentPage;
