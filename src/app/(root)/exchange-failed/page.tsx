import Image from "next/image";
import {ThemedText} from "@/components/ThemedText";
import Link from "next/link";
import Button from "@/components/Button";
import CrossIcon from "@/assets/icons/cross";


const ExchangeFailed = () => {
    return (
        <div>
            <div className='pt-[100px] pb-[161px] px-[370px]'>
                <div className='flex flex-col items-center gap-y-[30px]'>
                    <div className='w-[220px]'>
                        <div className='relative'>
                            <Image
                                width={1920}
                                height={1080}
                                src="/IMG_5815 (1).png"
                                alt="logo"
                                className="rounded-full w-[220px] h-[220px] object-cover z-0"
                            />
                        </div>

                        {/* Використовуємо flex для розташування кнопки */}
                        <div className='flex justify-end -mt-16 z-10 relative'>
                            <div className='flex items-center justify-center bg-[#DB1529] w-[72px] h-[72px] rounded-full'>
                                <CrossIcon/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-[10px] items-center'>
                        <ThemedText type='title'>Exchange successfully!</ThemedText>
                        <ThemedText>Your exchange has been successfully processed! The funds will now be transferred to your provided details. The processing time depends on the payment system and network load. If you do not receive the funds within the expected timeframe, please contact our support team. Thank you for choosing our service!</ThemedText>
                    </div>
                    <div className='flex flex-col gap-y-[10px] items-center'>
                        <Link href='/exchange-failed'>
                            <Button>Done</Button>
                        </Link>
                        <ThemedText type='link_text'>Didnt receive the funds?</ThemedText>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ExchangeFailed;