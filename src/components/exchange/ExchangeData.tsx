import {exchangeData} from "./constants";
import {ThemedText} from "@/components/ThemedText";
import Arrow from "@/assets/icons/Arrow";
import {Exchange} from "./constants";

function ExchangeItem({ item }: { item: Exchange }) {
    return (
        <div className='px-[114px]'>
            <div className="flex items-center gap-x-[30px]">
                <div className="flex flex-col">
                    <ThemedText type='text'>
                        {item.from} {item.fromChain}
                    </ThemedText>
                    <ThemedText type='text_blue'>
                        {item.fromAddress}
                    </ThemedText>
                </div>
                <Arrow className="fill-black"/>

                <div className="flex flex-col">
                    <ThemedText type='text'>
                        {item.toAccount} {item.to}
                    </ThemedText>
                    <ThemedText type='text_blue'>
                        {item.rate}
                    </ThemedText>
                </div>
            </div>
        </div>
    );
}

export function ExchangeData() {
    return (
        <div>
            <ExchangeItem item={exchangeData[0]} />
        </div>
    );
}

export default ExchangeData;