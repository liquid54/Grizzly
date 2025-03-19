import ExchangeConfirm from '@/components/exchange/exchange-confirm/page';

const ExchangeConfirmPage = () => {
    return (
        <div className='px-[16px] pt-[100px] md:pt-[118px] sm:pt-[100px]'>
            <ExchangeConfirm buttonLink='/exchange-failed' />
        </div>
    );
};

export default ExchangeConfirmPage;
