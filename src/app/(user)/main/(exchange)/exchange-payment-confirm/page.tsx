import PaymentConfirm from '@/components/exchange/exchange-payment-confirm/page';

const PaymentConfirmPage = () => {
    return (
        <div className=' pt-[70px] lg:pt-[70px] sm:pt-[40px] '>
            <PaymentConfirm buttonLink='/main/exchange-confirm' />
        </div>
    );
};

export default PaymentConfirmPage;
