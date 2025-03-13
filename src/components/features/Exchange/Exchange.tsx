import Selector from "@/components/Selector";
import Input from "@/components/Input";
import { ThemedText } from "@/components/ThemedText";
import Change from "@/assets/icons/Change";
import Agreement from "@/components/Agreement";
import Button from "@/components/Button";
import Link from "next/link";

const Exchange = ({ fullWidthButton = false, visibleBorder = false, fullWindow = false, ...props }) => {
    return (
        <div className={`flex flex-col p-[24px] ${visibleBorder ? 'border border-[#CFCEDB] rounded-[18px]' : ''}`} {...props}>
            <div className='space-y-[20px]'>
                <div className={`${fullWindow ? 'flex flex-row gap-[20px]' : 'space-y-[20px]'}`}>
                    <Selector type="crypto" className="w-full"/>
                    <Input type="crypto" className="w-full"/>
                </div>

                <ThemedText>Minimum exchange amount - </ThemedText> <ThemedText type='text_blue'>30 USDT</ThemedText>

                <div className="flex justify-center">
                    <button className='flex items-center justify-center w-[52px] h-[52px] bg-[#29BBDF] rounded-full'><Change/></button>
                </div>

                <div className={`${fullWindow ? 'flex flex-row gap-[20px]' : 'space-y-[20px]'}`}>
                    <Selector type="bank" className="w-full"/>
                    <Input type="bank" className="w-full"/>
                </div>

                <Agreement/>
                <div className={fullWidthButton ? '' : 'flex justify-center'}>
                    <Link href='/exchangeconfirm'>
                        <Button size='mid_large' className={fullWidthButton ? 'w-full' : ''} >Exchange</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Exchange;