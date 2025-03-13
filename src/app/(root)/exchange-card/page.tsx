import ExchangeInfo from "@/components/features/Exchange/ExchangeInfo";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Link from "next/link";


const CardInfo = () => {
    return (
        <div className='px-[515px] pt-[50px] pb-[23px]'>
            <ExchangeInfo/>

            <div className='px-[194px] flex flex-col gap-y-[30px] pt-[30px]'>
                <Input label={'Card number'} placeholder={'Write your card here'}/>
                <Input label={'Card holder`s name'} placeholder={'Write your name here'}/>
                <Input label={'Date'} placeholder={'MM/YY'}/>
                <Input label={'CVV Code'} placeholder={'Write your CVV code here'}/>
                <div className='flex justify-center pb-[30px]'>
                    <Link href='/exchange-payment'>
                        <Button size='medium'>Continue</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardInfo;