import React from 'react';

export type textEnum =
    | 'heading'
    | 'heading_blue'
    | 'title'
    | 'title_exchange'
    | 'subtitle'
    | 'text'
    | 'link_text'
    | 'placeholder_text'
    | 'text_bold'
    | 'text_exchange'
    | 'text_button_white'
    | 'text_button_blue'
    | 'text_button_red'
    | 'empty'


export type ThemedTextProps = React.HTMLAttributes<HTMLSpanElement> & {
    type?: textEnum;
    className?: string;
};

export function ThemedText({ type = 'text', className = '', ...rest }: ThemedTextProps) {
    return (
        <span
            className={`leading-100%
        ${type === 'heading' ? 'text-[70px] font-bold  text-[#1E1E1E]' : ''}
        ${type === 'heading_blue' ? 'text-[70px] font-bold text-[#29BBDF]' : ''}
        ${type === 'title' ? 'text-[52px] font-semibold text-[#1E1E1E]' : ''}
        ${type === 'subtitle' ? 'text-[20px] font-semibold text-[#1E1E1E]' : ''}

        ${type === 'title_exchange' ? 'text-[22px] leading-[20px] font-bold text-[#1E1E1E]' : ''}
        ${type === 'text_exchange' ? 'text-[16px] leading-[20px] font-medium text-[#1E1E1E]' : ''}
        
        
        ${type === 'text' ? 'text-[18px] text-[#1E1E1E]' : ''}
        ${type === 'link_text' ? 'text-[18px] text-[#29BBDF]' : ''}
        ${type === 'placeholder_text' ? 'text-[24px] text-[#A1A1A5]' : ''}
        ${type === 'text_bold' ? 'text-[24px] font-bold text-[#1E1E1E]' : ''}
        ${type === 'text_button_white' ? 'font-medium text-[18px] text-[#ffffff]' : ''}
        ${type === 'text_button_blue' ? 'font-medium text-[18px] text-[#29BBDF]' : ''}
        ${type === 'text_button_red' ? 'font-medium text-[18px] text-[#F0101B]' : ''}
        ${type === 'text_button_red' ? 'font-medium text-[18px] text-[#F0101B]' : ''}

        ${type === 'empty' ? '' : ''}
        ${className}`}
            {...rest}
        />
    );
}