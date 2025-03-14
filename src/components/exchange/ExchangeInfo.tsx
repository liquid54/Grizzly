import {ThemedText} from "@/components/ThemedText";
import ExchangeData from "@/components/exchange/ExchangeData";


const ExchangeDescription = () => {
    return (
        <div className='flex flex-col space-y-[10px]'>
            <div className='flex flex-col space-y-[10px] items-center'>
                <ThemedText type='title'>Exchange confirmation</ThemedText>
                <ThemedText type='text'>To confirm your exchange application, confirm your email.</ThemedText>
            </div>
            <ExchangeData></ExchangeData>
        </div>
    )
}

export default ExchangeDescription