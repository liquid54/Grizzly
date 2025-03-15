import {ThemedText} from "@/components/ThemedText";
import Input from "@/components/Input";
import Link from "next/link";
import Button from "@/components/Button";
import Google from "@/assets/icons/Google";
import Apple from "@/assets/icons/Apple";


const PaymentConfirm = ({ buttonLink = '' }: { buttonLink?: string }) => {
    return (
        <>
            <div className='flex flex-col space-y-[10px] items-center'>
                <ThemedText type='title'>Payment of the order</ThemedText>
                <ThemedText type='subtitle_blue'>58:10</ThemedText>
                <ThemedText type='subtitle' className='text-[18px]'>Pay within one hour</ThemedText>
                <ThemedText className='text-center'>Please transfer the specified amount to the provided cryptocurrency wallet address. Once the transaction is confirmed on the network, the exchange will be processed automatically. Dont forget to account for the network fee to ensure the transferred amount matches your request.</ThemedText>
            </div>
            <div className='flex flex-col gap-y-[30px] pt-[30px] items-center'>
                <Input label={'Card number'} placeholder={'Write your card here'}/>
                <Input label={'Card holder`s name'} placeholder={'Write your name here'}/>
                <Input label={'Date'} placeholder={'MM/YY'}/>
                <Input label={'CVV Code'} placeholder={'Write your CVV code here'}/>
                <div className='flex justify-center'>
                    <Link href={buttonLink}>
                        <Button size='medium'>Pay</Button>
                    </Link>
                </div>
                <div className='flex justify-center gap-x-[8px]'>
                    <Button size='medium' variant='secondary' className='border-gray-100 font-semibold '>
                        <div className='flex flex-row justify-center items-center gap-x-[10px]'>
                            <div className='pb-[13.5px]'><Apple/></div>
                            <ThemedText>Apple Pay</ThemedText>
                        </div>
                    </Button>
                    <Button size='medium' variant='secondary' className='border-gray-100 font-semibold '>
                        <div className='flex flex-row justify-center items-center  gap-x-[10px]'>
                            <Google/>
                            <ThemedText>Google Pay</ThemedText>
                        </div>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default PaymentConfirm;