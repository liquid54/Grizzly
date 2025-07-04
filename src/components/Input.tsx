'use client';

import React, { useState, useEffect } from 'react';
import { ThemedText } from '@/components/ThemedText';
import Copy from '@/assets/icons/Copy';

type InputProps = {
    value?: string;
    onChange?: (value: string) => void;
    type?: 'crypto' | 'bank' | '';
    inputType?: string;
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    containerClass?: string;
    label?: string;
    showCopyIcon?: boolean;
    resendText?: string; // Новий проп для змінного тексту
};

const Input = ({
    value,
    onChange,
    type = '',
    inputType = 'text',
    defaultValue,
    placeholder = '',
    className = '',
    containerClass = '',
    label,
    showCopyIcon = false,
    resendText, // Динамічний текст
    ...props
}: InputProps) => {
    let typeDefaultValue = '';
    if (type === 'crypto') {
        typeDefaultValue = '300.00';
    } else if (type === 'bank') {
        typeDefaultValue = '12.525.41';
    }
    const initialValue = value || defaultValue || typeDefaultValue;

    const [inputValue, setInputValue] = useState(initialValue);

    useEffect(() => {
        if (value !== undefined) {
            setInputValue(value);
        }
    }, [value]);

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;
        setInputValue(newValue);
        onChange?.(newValue);
    }

    return (
        <div
            className={`flex flex-col space-y-[6px] w-full max-w-[500px] ${containerClass}`}
        >
            {label && <ThemedText type='subtitle'>{label}</ThemedText>}
            <div
                className={`relative bg-gray-400 border border-white-200 rounded-[16px] w-full ${className}`}
            >
                <input
                    type={inputType}
                    value={inputValue}
                    onChange={handleInputChange}
                    className={`w-full px-[14px] sm:px-[31px] ${showCopyIcon ? 'pr-[60px]' : ''} py-[11px] sm:py-[21px] text-[16px] sm:text-[24px] font-semibold placeholder:font-normal placeholder:text-white-300 outline-none bg-transparent rounded-[14px] sm:rounded-[16px]`}
                    placeholder={placeholder}
                    {...props}
                />

                {showCopyIcon && (
                    <div className='absolute right-[30px] top-1/2 transform -translate-y-1/2'>
                        <Copy className='fill-black' />
                    </div>
                )}
            </div>

            {/* Відображаємо динамічний текст, якщо він є */}
            {resendText && (
                <ThemedText type='link_text' className='text-left'>
                    {resendText}
                </ThemedText>
            )}
        </div>
    );
};

export default Input;
