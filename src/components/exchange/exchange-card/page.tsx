import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";
import ExchangeDescription from "@/components/exchange/ExchangeInfo";


const ExchangeInfo =  ({ buttonLink = '' }: { buttonLink?: string }) => {
    return (
        <>
            <ExchangeDescription/>
            <div className='px-[194px] flex flex-col gap-y-[30px] pt-[30px]'>
                <Input label={'Card number'} placeholder={'Write your card here'}/>
                <Input label={'Card holder`s name'} placeholder={'Write your name here'}/>
                <Input label={'Date'} placeholder={'MM/YY'}/>
                <Input label={'CVV Code'} placeholder={'Write your CVV code here'}/>
                <div className='flex justify-center pb-[30px]'>
                    <Link href={buttonLink}>
                        <Button size='medium'>Continue</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ExchangeInfo;