'use client';

import React, { useState, useEffect } from 'react';
import { ThemedText } from "@/components/ThemedText";
import Copy from "@/assets/icons/Copy";

type InputProps = {
    value?: string;
    onChange?: (value: string) => void;
    type?: 'crypto' | 'bank' | '';
    defaultValue?: string;
    placeholder?: string;
    className?: string;
    label?: string;
    showCopyIcon?: boolean;
};

const Input = ({
                   value,
                   onChange,
                   type = '',
                   defaultValue,
                   placeholder = "",
                   className = '',
                   label,
                   showCopyIcon = false,
                   ...props
               }: InputProps) => {
    let typeDefaultValue = "";
    if (type === 'crypto') {
        typeDefaultValue = "300.00";
    } else if (type === 'bank') {
        typeDefaultValue = "12.525.41";
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
        <div className="flex flex-col space-y-[6px]">
            {label && (
                <ThemedText type='subtitle' >
                    {label}
                </ThemedText>
            )}
            <div className={`bg-[#F0F0F3] border border-[#CFCEDB] rounded-[16px] ${className}`}>
                {/* Обгортка для вмісту інпута з використанням flexbox */}
                <div className="flex items-center">
                    {/* Інпут тепер займає більшу частину простору */}
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="flex-grow px-[30px] py-[18px] text-[24px] semibold outline-none"
                        placeholder={placeholder}
                        {...props}
                    />

                    {/* Валютний суфікс, якщо потрібен */}
                    {type === 'crypto' && (
                        <span className="text-[#666666] text-[24px]">
                            USD
                        </span>
                    )}
                    {type === 'bank' && (
                        <span className="text-[#666666] text-[24px]">
                            UAH
                        </span>
                    )}

                    {/* Іконка копіювання з правого боку */}
                    {showCopyIcon && (
                        <div className='pr-[30px]'>
                            <Copy className="fill-black"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Input;