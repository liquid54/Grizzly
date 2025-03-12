import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";


const ExchangePayment = () => {
    return (
        <div className='flex flex-col pt-[100px] pb-[242px] px-[370px] space-y-[30px] items-center'>
            <div className='flex flex-col space-y-[10px] items-center'>
                <ThemedText type='title'>Payment of the order</ThemedText>
                <ThemedText type='subtitle_blue'>58:10</ThemedText>
                <ThemedText type='subtitle' className='text-[18px]'>Pay within one hour</ThemedText>
                <ThemedText className='text-center'>Please transfer the specified amount to the provided cryptocurrency wallet address. Once the transaction is confirmed on the network, the exchange will be processed automatically. Dont forget to account for the network fee to ensure the transferred amount matches your request.</ThemedText>
            </div>
            <div>
                <Input value='TQpB4CmDkZ6s8H1rJ7k2N9Xm' showCopyIcon={true} className='items-center'/>
            </div>
            <Link href='/exchange-payment-confirm'>
                <Button size='medium'>Exchange</Button>
            </Link>
        </div>
    );
}

export default ExchangePayment;