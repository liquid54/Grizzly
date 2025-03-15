import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import ExchangeDescription from "@/components/exchange/ExchangeInfo";


const ExchangeConfirm = ({buttonLink = ''}: { buttonLink?: string }) => {
    return (
        <>
            <ExchangeDescription></ExchangeDescription>
            <div className='flex flex-col gap-y-[30px] pt-[30px] items-center'>
                <Input label={'Whatsapp'} placeholder={'Confirm your Whatsapp'}/>
                <Input label={'Telegram'} placeholder={'Confirm your Telegram'}/>
                <Input label={'Confirm your email'} placeholder={'Write your code'} resendText='Send code again'/>
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