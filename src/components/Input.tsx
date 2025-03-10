'use client';

import React, { useState, useEffect } from 'react';
import {ThemedText} from "@/components/ThemedText";

type InputProps = {
    value?: string;
    onChange?: (value: string) => void;
    type?: 'crypto' | 'bank' | '';
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    label?: string;          // Додаємо текст-лейбл для інпуту
};

const Input = ({
                   value,
                   onChange,
                   type = '',
                   defaultValue,
                   placeholder = "",
                   className = '',
                   label,
                   ...props
               }: InputProps) => {
    // Встановлюємо значення за замовчуванням залежно від типу
    let typeDefaultValue = "";
    if (type === 'crypto') {
        typeDefaultValue = "300.00";
    } else if (type === 'bank') {
        typeDefaultValue = "12.525.41";
    }
    const initialValue = value || defaultValue || typeDefaultValue;

    // Створюємо локальний стейт для значення інпуту
    const [inputValue, setInputValue] = useState(initialValue);

    // Синхронізуємо локальний стейт із зовнішнім value, якщо він змінюється
    useEffect(() => {
        if (value !== undefined) {
            setInputValue(value);
        }
    }, [value]);

    // Функція обробки зміни значення інпуту
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;
        setInputValue(newValue); // Оновлюємо локальний стейт
        onChange?.(newValue);    // Викликаємо зовнішній обробник, якщо він є
    }

    return (
        <div className="flex flex-col space-y-[6px]">
            {label && (
                <ThemedText type='subtitle' >
                    {label}
                </ThemedText>
            )}
            <div className={`bg-[#F0F0F3] border border-[#CFCEDB] rounded-[16px] ${className}`}>
                <div className="relative">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="w-full px-[30px] py-[18px] text-[24px] semibold outline-none"
                        placeholder={placeholder}
                        {...props}
                    />
                    {type === 'crypto' && (
                        <span className="absolute right-[30px] top-1/2 transform -translate-y-1/2 text-[#666666] text-[24px]">
                            USD
                        </span>
                    )}
                    {type === 'bank' && (
                        <span className="absolute right-[30px] top-1/2 transform -translate-y-1/2 text-[#666666] text-[24px]">
                            UAH
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Input;