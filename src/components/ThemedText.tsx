import React from 'react';

export type textEnum =
    | 'heading'
    | 'heading_blue'
    | 'title'
    | 'title_exchange'
    | 'subtitle'
    | 'subtitle_blue'
    | 'text'
    | 'text_blue'
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
            className={`
        ${type === 'heading' ? 'text-[70px] font-bold text-brown-100 font-unbounded leading-[100%] tracking-[0%]' : ''}
        ${type === 'heading_blue' ? 'text-[70px] font-bold text-blue-100 font-unbounded leading-[100%] tracking-[0%]' : ''}
        ${type === 'title' ? 'text-[52px] font-semibold text-brown-100 font-unbounded' : ''}
        ${type === 'subtitle' ? 'text-[20px] font-semibold text-brown-100 font-unbounded' : ''}
        ${type === 'subtitle_blue' ? 'text-[34px] font-bold text-blue-100 font-unbounded' : ''}

        ${type === 'title_exchange' ? 'text-[22px] leading-[20px] font-bold text-brown-100 font-poppins block uppercase' : ''}
        ${type === 'text_exchange' ? 'text-[16px] leading-[20px] font-medium text-brown-100 font-poppins block uppercase' : ''}
        
        
        ${type === 'text' ? 'text-[18px] text-brown-100 font-poppins' : ''}
        ${type === 'text_blue' ? 'text-[18px] font-bold text-blue-100 font-poppins' : ''}
        ${type === 'link_text' ? 'text-[18px] text-blue-100 font-poppins' : ''}
        ${type === 'placeholder_text' ? 'text-[24px] text-white-200 font-poppins' : ''}
        ${type === 'text_bold' ? 'text-[24px] font-bold text-brown-100 font-poppins' : ''}
        ${type === 'text_button_white' ? 'font-medium text-[18px] text-white-100 font-poppins' : ''}
        ${type === 'text_button_blue' ? 'font-medium text-[18px] text-blue-100 font-poppins' : ''}
        ${type === 'text_button_red' ? 'font-medium text-[18px] text-red-100 font-poppins' : ''}
        ${type === 'text_button_red' ? 'font-medium text-[18px] text-red-100 font-poppins' : ''}

        ${type === 'empty' ? '' : ''}
        ${className}`}
            {...rest}
        />
    );
}