import ExchangePayment from "@/components/exchange/exchange-payment/page";


const ExchangePaymentPage = () => {
    return (
        <div className='pt-[100px] pb-[242px] px-[370px]'>
            <ExchangePayment buttonLink="/exchange-payment-confirm"/>
        </div>
    );
}

export default ExchangePaymentPage;