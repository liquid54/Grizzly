import {exchangeData} from "@/components/ExchangeInfo/constants";
import {ThemedText} from "@/components/ThemedText";
import Arrow from "@/assets/icons/Arrow";
import {Exchange} from "@/components/ExchangeInfo/constants";

function ExchangeItem({ item }: { item: Exchange }) {
    return (
        <div className="flex justify-between items-center gap-x-[30px]">
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
    );
}

export function ExchangeData() {
    return (
        <div className='px-[114px]'>
            <ExchangeItem item={exchangeData[0]} />
        </div>
    );
}

export default ExchangeData;