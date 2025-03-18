import ExchangeMain from '@/components/exchange/page';

const ExchangePage = () => {
    return (
        <div className='flex justify-center sm:border sm:border-[#CFCEDB] lg:border-0 rounded-[20px]  pt-[101.5px]  max-lg:pt-[166px] max-lg:px-[24px] max-sm:px-[0] pb-[520px] max-sm:pt-[50px] '>
            <ExchangeMain
                buttonLink='/main/exchangeconfirm'
                visibleBorder={false}
            />
        </div>
    );
};

export default ExchangePage;
