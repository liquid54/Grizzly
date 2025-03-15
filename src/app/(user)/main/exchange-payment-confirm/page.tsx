import PaymentConfirm from "@/components/exchange/exchange-payment-confirm/page";


const PaymentConfirmPage = () => {
    return (
        <div className='px-[353px] py-[100px]'>
            <PaymentConfirm buttonLink="/main/exchange-confirm"/>
        </div>
    );
}

export default PaymentConfirmPage;