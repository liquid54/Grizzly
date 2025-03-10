import { type ReactNode } from 'react';
import { ThemedText, textEnum } from './ThemedText'; // Шлях до вашого компонента ThemedText

interface ButtonProps {
    children: ReactNode,
    className?: string,
    variant?: 'primary' | 'secondary' | 'red' | 'social',
    size?: 'large' | 'small' | 'medium' | 'tiny',
    onClick?: () => void,
    type?: "button" | "reset" | "submit" | undefined,
    textType?: textEnum // Опціональний тип тексту, який можна перевизначити
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
        primary: 'bg-gradient-to-br from-[#29BBDF] to-[#008AAC] border-none text-white',
        secondary: 'bg-white border-[2px] border-[#008AAC] text-[#008AAC]',
        red: 'border-2 border-[#F0101B] bg-white text-[#F0101B]',
        social: 'bg-[#31A8E0] text-white'
    };

    // Додаємо адаптивні стилі для різних пристроїв
    const sizeStyles = {
        large: 'h-[48px] w-[358px] rounded-[90px]',
        medium: 'h-[63px] w-[209px] rounded-[18px]',
        small: 'h-[51px] w-[136px] rounded-[14px]',
        tiny: 'h-[51px] w-[51px] rounded-[14px]',
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
            default:
                return 'text';
        }
    };

    return (
        <button
            type={type}
            className={`
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