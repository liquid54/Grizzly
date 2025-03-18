import ExchangeConfirm from "@/components/exchange/exchange-confirm/page";

const ExchangeConfirmPage = () => {
    return (
        <div className='pt-[80px] pb-[94px] px-[449px]'>
            <ExchangeConfirm buttonLink="/main/exchange-failed"/>
        </div>
    );
}

export default ExchangeConfirmPage;