import ExchangeConfirm from "@/components/exchange/exchange-confirm/page";

const ExchangeConfirmPage = () => {
    return (
        <div className='pt-[100px] pb-[151px] px-[370px]'>
            <ExchangeConfirm buttonLink="/exchange-failed"/>
        </div>
    );
}

export default ExchangeConfirmPage;