// components/TermsOfUse.js
import React from 'react';
import Button from "@/components/Button";
import {ThemedText} from "@/components/ThemedText";
import Link from "next/link";

const TermsOfUse = () => {
    // Масив з умовами використання
    const termsOfUse = [
        {
            title: "1. General Provisions",
            content: "1.1. These terms define the conditions for using the cryptocurrency exchange service (hereinafter referred to as the \"Service\"). 1.2. By using the Service, the user agrees to all the stated rules and undertakes to comply with them. 1.3. The Service is not a financial institution and does not provide banking or credit services."
        },
        {
            title: "2. Registration and Verification",
            content: "2.1. To access all features of the Service, the user must complete registration. 2.2. The Service may require identity verification in accordance with the KYC (\"Know Your Customer\") policy. 2.3. The user is required to provide only truthful information. If false data is detected, access to the Service may be blocked."
        },
        {
            title: "3. Use of the Service",
            content: "3.1. The user may exchange only permitted cryptocurrencies. 3.2. All transactions are irreversible. Once the exchange is confirmed, it cannot be canceled or changed. 3.3. The user is solely responsible for the correctness of the entered payment details. 3.4. The Service is not responsible for possible delays in payment processing by payment systems."
        },
        {
            title: "4. Security and Confidentiality",
            content: "4.1. The user undertakes to keep their account data confidential and not to share it with third parties. 4.2. In case of unauthorized access detection, the user must immediately notify the Service administration. 4.3. The Service has the right to conduct transaction checks to prevent fraudulent activities."
        },
        {
            title: "5. Restrictions and Prohibitions",
            content: "5.1. It is prohibited to use the Service for illegal financial transactions. 5.2. It is forbidden to use the Service for financing terrorism, money laundering, or other illegal activities. 5.3. The administration reserves the right to refuse a transaction without explanation."
        },
        {
            title: "6. Liability of the Parties",
            content: "6.1. The user is fully responsible for the legality of their actions while using the Service. 6.2. The Service is not responsible for the user's loss of funds due to their own mistakes or actions of third parties. 6.3. The Service administration is not liable for damages suffered by the user due to technical failures or hacker attacks."
        },
        {
            title: "7. Force Majeure",
            content: "7.1. The Service is not responsible for the failure to fulfill obligations in case of force majeure circumstances such as natural disasters, military conflicts, cyberattacks, etc. 7.2. In the event of force majeure, the Service reserves the right to suspend operations without prior notice."
        },
        {
            title: "8. Changes to the Terms",
            content: "8.1. The administration reserves the right to make changes to these terms at any time. 8.2. The updated rules take effect from the moment they are published on the website."
        },
        {
            title: "9. Contact Information",
            content: "9.1. For any questions regarding the use of the Service, the user may contact support through official communication channels. These terms are mandatory for all users of the service."
        }
    ];

    return (
        <div className="flex flex-col lg:max-w-[1168px] lg:mx-auto space-y-[50px]">
            <div className="flex justify-center">
                <ThemedText type='title_terms' className='text-center'>Terms of Use for the Cryptocurrency Exchange
                    Service</ThemedText>
            </div>

            <div className="space-y-[50px]">
                {termsOfUse.map((term, index) => (
                    <div key={index} className='flex flex-col justify-center space-y-[10px]'>
                        <ThemedText type='title_poppins' className='text-center'>{term.title}</ThemedText>
                        <ThemedText className='text-center'>{term.content}</ThemedText>
                    </div>
                ))}
            </div>


            <div className='w-full flex justify-center'>
                <Link href='/exchange' className='w-full md:w-auto'>
                    <Button size='xl'>Exchange</Button>
                </Link>
            </div>

        </div>
    );
}

export default TermsOfUse