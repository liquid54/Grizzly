import ExchangeMain from '@/components/exchange/page';

const ExchangePage = () => {
    return (
        <div className='flex justify-center pt-[101.5px] max-lg:pt-[166px] max-lg:px-[24px] max-sm:px-[0]'>
            <ExchangeMain
                buttonLink='/main/exchangeconfirm'
                visibleBorder={false}
            />
        </div>
    );
};

export default ExchangePage;
