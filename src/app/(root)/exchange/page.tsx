import ExchangeMain from "@/components/exchange/page";

const ExchangePage = () => {
    return (
        <div className='px-[357px] pb-[110px] pt-[100px]'>
            <ExchangeMain buttonLink="/exchangeconfirm" visibleBorder={true}/>
        </div>
    );
}

export default ExchangePage;