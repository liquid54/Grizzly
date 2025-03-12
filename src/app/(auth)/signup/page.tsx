import Input from "@/components/Input";
import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const SignUp = () => {
    return (
        <div className='py-[52px] px-[515px]'>
            <div className='flex flex-col gap-y-[30px] items-center'>
                <div className='flex flex-col gap-y-[30px] items-center'>
                    <Image
                        width={1920}
                        height={1080}
                        src="/IMG_5815 (1).png"
                        alt="logo"
                        className="rounded-full w-[100px] h-[100px]"
                    />
                </div>
                <ThemedText type='title' className='text-[36px]'>Sign Up</ThemedText>
                <div className='flex flex-row  gap-y-[10px]'>
                    <ThemedText className='text-[#8A8B8E]'>Already have an account?</ThemedText> <Link
                    href='/login'><ThemedText type='link_text'> Log In</ThemedText></Link>
                </div>

                <Input label={'Email*'} placeholder={'Write your email'}/>
                <div className='flex flex-col gap-y-[6px]'>
                    <Input label={'Password*'} placeholder={'Write your code'}/>
                    <ThemedText type='link_text'>Show password</ThemedText>
                </div>
                <div className='flex flex-col gap-y-[6px]'>
                    <Input label={'Repeat Password*'} placeholder={'Write your code'}/>
                    <ThemedText type='link_text'>Show password</ThemedText>
                </div>
                <Input label={'Telegram'} placeholder={'Write your Telegram number'}/>
                <Input label={'Whatsapp'} placeholder={'Write your Whatsapp number'}/>
                <Link href='/login'><Button>Sign Up</Button></Link>
            </div>
        </div>
    );
}

export default SignUp;