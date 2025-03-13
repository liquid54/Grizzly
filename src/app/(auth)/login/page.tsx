import Input from "@/components/Input";
import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
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
                <ThemedText type='title' className='text-[36px]'>Log In</ThemedText>
                <div className='flex flex-row gap-x-[10px] items-center'>
                    <ThemedText className='text-[#8A8B8E]'>Don`t have an account?</ThemedText>
                    <Link href='/signup'><ThemedText type='link_text'>Sign Up</ThemedText></Link>
                </div>

                <Input label={'Email*'} placeholder={'Write your email'} className="w-full"/>
                <div className='flex flex-col gap-y-[6px] w-full'>
                    <Input label={'Password*'} placeholder={'Write your code'} className="w-full"/>
                    <ThemedText type='link_text'>Show password</ThemedText>
                </div>
                <Link href='/login'><Button>Log In</Button></Link>
            </div>
        </div>
    );
}

export default Login;