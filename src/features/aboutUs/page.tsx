import Card from "@/features/aboutUs/Card";
import Vision from "@/assets/icons/Vision";
import Offer from "@/assets/icons/Offer";
import Goal from "@/assets/icons/Goal";
import Image from "next/image";
import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import Link from "next/link";

const About = () => {
    return (
        <div className='flex flex-col gap-y-[100px] lg:px-[16px] md:px-[32px] px-[16px]'>
            <div className=''>
                <div className='flex flex-col lg:gap-y-[50px] items-center lg:max-w-[1168px] lg:mx-auto lg:pt-[100px]'>
                    <Image
                        width={1920}
                        height={1080}
                        src="/IMG_5815 (1).png"
                        alt="logo"
                        className="rounded-full w-[260px] h-[260px]"
                    />

                    <div className='flex flex-col lg:gap-y-[50px] gap-y-[20px]'>
                        <ThemedText type='title_about' className='mx-auto'>Grizzly Exchange</ThemedText>
                        <ThemedText type='text' className='md:text-center text-left'>Grizzly exchange is a platform that
                            allows you to
                            quickly and securely exchange one cryptocurrency for another or for fiat money. This
                            exchange has
                            extensive experience in the market, ensuring a high level of reliability and security. The
                            user-friendly interface makes it easy for users to navigate the exchange process, even if
                            they are
                            new to the cryptocurrency world. Thanks to the high transaction speed, you can perform
                            operations
                            instantly without waiting for long confirmations. The platform supports a wide range of
                            popular
                            cryptocurrencies, allowing you to choose the most profitable exchange options. All
                            operations are
                            protected by a multi-layer security system, ensuring the confidentiality of your data and
                            funds. An
                            advantage of this exchange is also its low fees, which allow you to save significantly on
                            each
                            transaction. In addition, the platform offers 24/7 customer support, ready to assist in any
                            situation. The exchange actively uses modern technologies to constantly improve the service
                            and
                            ensure a high level of user satisfaction. Choosing Grizzly exchange is a step toward secure
                            and
                            profitable cryptocurrency trading.</ThemedText>
                    </div>
                </div>
            </div>
            <div className="lg:max-w-[1170px] space-y-[50px] lg:mx-auto lg:pb-[220px] pb-[100px]">
                <Card icon={<Vision/>} title="Our Vision"
                      description="Our company's vision is to become a leader in the cryptocurrency exchange market, providing users with maximum convenience and security in every transaction. We aim to create a platform that combines innovative technologies with ease of use, making cryptocurrency exchange accessible to everyone. Our goal is to offer customers not only favorable conditions but also a high level of trust and support. We believe that cryptocurrencies will become the foundation of the future financial system, and our company will actively contribute to this process."/>
                <Card icon={<Goal/>} title="Our Mission"
                      description="Our company's mission is to provide users with the best cryptocurrency exchange experience while maintaining high security and transaction speed. We aim to make cryptocurrency operations accessible and convenient for people around the world. Our goal is to contribute to the development of the cryptocurrency ecosystem by offering innovative and reliable solutions for every user. We are committed to continuously improving our service to stay one step ahead in the dynamic world of cryptocurrencies."/>
                <Card icon={<Offer/>} title="What We Offer"
                      description="Our company offers a wide range of services, including cryptocurrency exchange for fiat money and between different cryptocurrencies. We also provide instant and secure transactions with low fees for our users. In addition, we offer 24/7 customer support, ready to assist with any questions. With a user-friendly interface and high security, our users can easily and quickly perform exchanges without any hassle."/>
                <Link href='/exchange' className="flex justify-center">
                    <Button size='xl'>Exchange</Button>
                </Link>
            </div>
        </div>
    );
}

export default About;