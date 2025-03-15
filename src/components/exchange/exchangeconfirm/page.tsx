import Input from "@/components/Input";
import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import Link from "next/link";
import ExchangeDescription from "@/components/exchange/ExchangeInfo";


const ExchangeConfirm = ({ buttonLink = '' }: { buttonLink?: string }) => {
    return (
        <>
            <ExchangeDescription></ExchangeDescription>
            <div className='px-[194px] flex flex-col gap-y-[30px] pt-[30px]'>
                <Input label={'Whatsapp'} placeholder={'Confirm your Whatsapp'}/>
                <Input label={'Telegram'} placeholder={'Confirm your Telegram'}/>
                <div className='flex flex-col gap-y-[6px]'>
                    <Input label={'Comfirm your email'} placeholder={'Write your code'}/>
                    <ThemedText type='link_text'>Send code again</ThemedText>
                </div>
                <div className='flex justify-center'>
                    <Link href={buttonLink}>
                        <Button size='mid_large'>Continue</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default ExchangeConfirm;