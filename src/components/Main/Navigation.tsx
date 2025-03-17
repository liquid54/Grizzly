import Link from "next/link";
import {ThemedText} from "@/components/ThemedText";

const Navigation = () => (
    <>
        <Link href='/'>
            <ThemedText>Home</ThemedText>
        </Link>
        <Link href='/about'>
            <ThemedText>About Us</ThemedText>
        </Link>
        <Link href='/faq'>
            <ThemedText>FAQ</ThemedText>
        </Link>
    </>
)

export default Navigation