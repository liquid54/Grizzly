import { type ReactNode } from 'react';
import { ThemedText, textEnum } from './ThemedText'; // Шлях до вашого компонента ThemedText

interface ButtonProps {
    children: ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'red' | 'social' | 'text';
    size?:
        | 'large'
        | 'mid_large'
        | 'small'
        | 'medium'
        | 'tiny'
        | 'text'
        | 'xl'
        | '_small';
    onClick?: () => void;
    type?: 'button' | 'reset' | 'submit' | undefined;
    textType?: textEnum; // Опціональний тип тексту, який можна перевизначити
}

const Button = ({
    children,
    className = '',
    variant = 'primary',
    size = 'medium',
    onClick,
    type,
    textType, // Додано новий параметр
}: ButtonProps) => {
    const baseStyles = '';

    const variantStyles = {
        primary: 'bg-gradient-to-br from-blue-100 to-blue-200 border-none text-white',
        secondary: 'bg-white border-[2px] border-blue-200 text-blue-200',
        red: 'border-2 border-red-100 bg-white text-red-100',
        social: 'bg-[#31A8E0] text-white',
        text: 'bg-none',
    };

    // Додаємо адаптивні стилі для різних пристроїв
    const sizeStyles = {
        large: 'h-[48px] w-[358px] rounded-[90px]',
        mid_large: 'h-[63px] w-[263px] rounded-[18px]',
        xl: 'w-full h-[48px] sm:h-[63px] sm:w-[246px] rounded-[90px] sm:rounded-[18px]',
        medium: 'h-[48px] sm:h-[63px] w-[209px] rounded-[90px] sm:rounded-[18px]',
        small: 'w-full h-[48px] sm:h-[51px] sm:w-[136px] rounded-[90px] sm:rounded-[14px]',
        _small: 'h-[51px] w-[136px] rounded-[14px]',
        tiny: 'h-[51px] w-[51px] rounded-[14px]',
        text: '',
    };

    // Визначаємо тип тексту залежно від варіанту кнопки
    const getTextType = (): textEnum => {
        if (textType) return textType;

        switch (variant) {
            case 'primary':
                return 'text_button_white';
            case 'secondary':
                return 'text_button_blue';
            case 'red':
                return 'text_button_red';
            case 'text':
                return 'text_button_blue';
            default:
                return 'text';
        }
    };

    return (
        <button
            type={type}
            className={`cursor-pointer
                ${baseStyles}
                ${variantStyles[variant]}
                ${sizeStyles[size]}
                ${className}
            `}
            onClick={onClick}
        >
            {typeof children === 'string' ? (
                <ThemedText type={getTextType()}>{children}</ThemedText>
            ) : (
                children
            )}
        </button>
    );
};

export default Button;
