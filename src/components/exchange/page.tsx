import {ThemedText} from "@/components/ThemedText";
import Exchange from "@/components/exchange/Exchange";


const ExchangeMain = ({ buttonLink, visibleBorder }: { buttonLink?: string , visibleBorder?: boolean}) => {
    return (
        <div className='flex flex-col gap-y-[30px]'>
            <div className='flex items-center justify-center'>
                <ThemedText type='title'>Cryptocurrency Exchange</ThemedText>
            </div>
            <div className='px-[56px]'>
                <Exchange
                    visibleBorder={visibleBorder}
                    fullWindow={true}
                    buttonLink={buttonLink}
                />
            </div>
        </div>
    )
}

export default ExchangeMain;