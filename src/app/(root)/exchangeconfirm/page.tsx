import Input from "@/components/Input";
import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import ExchangeInfo from "@/components/features/Exchange/ExchangeInfo";
import Link from "next/link";


const ExConfirm = () => {
  return (
    <div className='px-[515px] pt-[50px] pb-[23px]'>
        <ExchangeInfo></ExchangeInfo>

        <div className='px-[194px] flex flex-col gap-y-[30px] pt-[30px]'>
            <Input label={'Whatsapp'} placeholder={'Confirm your Whatsapp'} />
            <Input label={'Telegram'} placeholder={'Confirm your Telegram'} />
            <div className='flex flex-col gap-y-[6px]'>
                <Input label={'Comfirm your email'} placeholder={'Write your code'} />
                <ThemedText type='link_text'>Send code again</ThemedText>
            </div>
            <div className='flex justify-center'>
                <Link href='/exchange-card'>
                    <Button size='mid_large'>Continue</Button>
                </Link>
            </div>
        </div>

    </div>
  );
}

export default ExConfirm;