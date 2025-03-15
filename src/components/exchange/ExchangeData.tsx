import {exchangeData} from "./constants";
import {ThemedText} from "@/components/ThemedText";
import Arrow from "@/assets/icons/Arrow";
import {Exchange} from "./constants";

function ExchangeItem({ item }: { item: Exchange }) {
    return (
        <div className="relative flex w-full h-[60px]">
            {/* Стрілка точно по центру */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Arrow className="fill-black"/>
            </div>

            {/* Ліва частина */}
            <div className="flex-1 flex justify-end items-center pr-[60px]">
                <div className="flex flex-col">
                    <ThemedText type='text'>
                        {item.from} {item.fromChain}
                    </ThemedText>
                    <ThemedText type='text_blue'>
                        {item.fromAddress}
                    </ThemedText>
                </div>
            </div>

            {/* Невидимий центральний елемент для розділення */}
            <div className="w-0"></div>

            {/* Права частина */}
            <div className="flex-1 flex justify-start items-center pl-[60px]">
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