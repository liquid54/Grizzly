import PaymentConfirm from '@/components/exchange/exchange-payment-confirm/page';

const PaymentConfirmPage = () => {
    return (
        <div className='px-[16px] pt-[100px] md:pt-[86px] sm:pt-[100px]'>
            <PaymentConfirm buttonLink='/exchange-confirm' />
        </div>
    );
};

export default PaymentConfirmPage;
