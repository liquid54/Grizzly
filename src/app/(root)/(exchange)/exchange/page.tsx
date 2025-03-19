import ExchangeMain from '@/components/exchange/page';

const ExchangePage = () => {
    return (
        <div className='pt-[100px] max-lg:px-[32px] max-sm:px-[16px] max-sm:pt-[50px]'>
            <ExchangeMain buttonLink='/exchangeconfirm' visibleBorder={true} />
        </div>
    );
};

export default ExchangePage;
