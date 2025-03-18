import { ThemedText } from '@/components/ThemedText';
import Exchange from '@/components/exchange/Exchange';

const ExchangeMain = ({
    buttonLink,
    visibleBorder,
}: {
    buttonLink?: string;
    visibleBorder?: boolean;
}) => {
    return (
        <div className='flex flex-col gap-y-[30px] max-w-[1020px] w-full mx-auto '>
            <div className='flex items-center justify-center'>
                <ThemedText type='title_exchange' className='text-center'>
                    Cryptocurrency Exchange
                </ThemedText>
            </div>
            <div className='max-sm:flex justify-center'>
                <Exchange
                    visibleBorder={visibleBorder}
                    fullWindow={true}
                    buttonLink={buttonLink}
                />
            </div>
        </div>
    );
};

export default ExchangeMain;
