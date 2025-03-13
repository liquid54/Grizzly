// components/FAQ.js
import React from 'react';
import {ThemedText} from "@/components/ThemedText";

const FAQ = ()=> {
    // Масив з FAQ
    const faqItems = [
        {
            question: "How does your cryptocurrency exchange service work?",
        },
        {
            question: "Which cryptocurrencies are available for exchange?",
        },
        {
            question: "How long does the exchange process take?",
        },
        {
            question: "What is the exchange fee?",
        },
        {
            question: "Do I need to complete verification to exchange?",
        },
        {
            question: "What should I do if I sent the wrong amount or address?",
        },
        {
            question: "What payment methods do you support?",
        },
        {
            question: "How is the security of my transactions ensured?",
        },
        {
            question: "Do you have a mobile app or an API for integration?",
        },
        {
            question: "What should I do if my transaction is delayed or not confirmed?",
        },
    ];

    return (
        <div className="space-y-[50px]">
            <div className='flex justify-center'>
                <ThemedText type='title' className='text-[36px]'>Frequently asked questions</ThemedText>
            </div>
            <div className="space-y-4">
                {faqItems.map((item, index) => (
                    <div key={index} className="p-[22px] border border-white-200 rounded-[24px]">
                        <ThemedText type='title_poppins'>{item.question}</ThemedText>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ