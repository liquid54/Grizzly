import Link from "next/link";
import {ThemedText} from "@/components/ThemedText";

const Navigation = () => (
    <div className='flex gap-x-[83px]'>
        <Link href='/'>
            <ThemedText>Home</ThemedText>
        </Link>
        <Link href='/about'>
            <ThemedText>About Us</ThemedText>
        </Link>
        <Link href='/faq'>
            <ThemedText>FAQ</ThemedText>
        </Link>
    </div>
)

export default Navigation