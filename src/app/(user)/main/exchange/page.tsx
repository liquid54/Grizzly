import ExchangeMain from "@/components/exchange/page";

const ExchangePage = () => {
    return (
        <div className='px-[327px] pb-[101.5px]'>
            <ExchangeMain buttonLink="/main/exchangeconfirm" visibleBorder={false} />
        </div>
    );
}

export default ExchangePage;