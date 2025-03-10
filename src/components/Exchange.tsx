import Selector from "@/components/Selector";
import Input from "@/components/Input";
import {ThemedText} from "@/components/ThemedText";
import Change from "@/assets/icons/Change";
import Agreement from "@/components/Agreement";
import Button from "@/components/Button";

const Exchange = ({ fullWidthButton = false, visibleBorder = false, ...props }) => {
    return (
        <div className={`flex flex-col p-[24px] ${visibleBorder ? 'border border-[#CFCEDB] rounded-[18px]' : ''}`} {...props}>
            <div className='space-y-[20px]'>
                <div className='space-y-[20px]'>
                    <Selector type="crypto"/>
                    <Input type="crypto"/>
                    <ThemedText>Minimum exchange amount - </ThemedText><ThemedText className='text-[#29BBDF] font-bold'>30 USDT</ThemedText>
                </div>

                <div className="flex justify-center">
                    <button className='flex items-center justify-center w-[52px] h-[52px] bg-[#29BBDF] rounded-full'><Change/></button>
                </div>

                <div className='space-y-[20px]'>
                    <Selector type="bank"/>
                    <Input type="bank"/>
                </div>

                <Agreement/>
                <div className='flex justify-center'>
                    <Button size='medium' className={fullWidthButton ? 'w-full' : ''} >Exchange</Button>
                </div>
            </div>
        </div>
    );
};

export default Exchange;