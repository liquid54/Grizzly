import ExchangeCard from "@/components/exchange/ExchangeCard";
import {exchangeData} from "@/components/constants";


const ExchangeList = () => {
    return (
        <div className="w-full py-[53px] gap-[23px] lg:pt-[53px] md:pt-[53px] pt-[60px] ">
            <div className="flex overscroll-none gap-[19px] overflow-hidden md:max-h-[89px] max-h-[69px]">
                {exchangeData.map((exchange) => (
                    <ExchangeCard key={exchange.id} exchange={exchange} />
                ))}
            </div>
        </div>
    );
};

export default ExchangeList;