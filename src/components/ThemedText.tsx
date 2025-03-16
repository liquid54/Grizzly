import React from 'react';

export type textEnum =
    | 'heading'
    | 'heading_blue'
    | 'title'
    | 'title_poppins'
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
    | 'panel-text'
    | 'panel-title'
    | 'panel-title-blue'
    | 'panel-heading'
    | 'panel-table-header'
    | 'empty';

export type ThemedTextProps = React.HTMLAttributes<HTMLSpanElement> & {
    type?: textEnum;
    className?: string;
};

export function ThemedText({
    type = 'text',
    className = '',
    ...rest
}: ThemedTextProps) {
    return (
        <span
            className={`
        ${type === 'heading' ? 'lg:text-[70px] md:text-[50px] text-[35px] font-bold text-brown-100 font-unbounded leading-[100%] tracking-[0%]' : ''}
        ${type === 'heading_blue' ? 'lg:text-[70px] md:text-[50px] text-[35px] font-bold text-blue-100 font-unbounded leading-[100%] tracking-[0%]' : ''}
        ${type === 'title' ? 'lg:text-[52px] text-[35px] font-semibold text-brown-100 font-unbounded' : ''}
        ${type === 'title_poppins' ? 'text-[24px] font-semibold text-brown-100 font-poppins' : ''}
        ${type === 'subtitle' ? 'text-[20px] font-bold text-brown-100 font-poppins' : ''}
        ${type === 'subtitle_blue' ? 'text-[34px] font-bold text-blue-100 font-unbounded' : ''}

        ${type === 'title_exchange' ? 'text-[22px] leading-[20px] font-bold text-brown-100 font-poppins block uppercase' : ''}
        ${type === 'text_exchange' ? 'text-[16px] leading-[20px] font-medium text-brown-100 font-poppins block uppercase' : ''}
        
        
        ${type === 'text' ? 'lg:text-[18px] text-[16px] text-brown-100 font-poppins' : ''}
        ${type === 'text_blue' ? 'text-[18px] font-bold text-blue-100 font-poppins' : ''}
        ${type === 'link_text' ? 'text-[18px] text-blue-100 font-poppins' : ''}
        ${type === 'placeholder_text' ? 'text-[24px] text-white-200 font-poppins' : ''}
        ${type === 'text_bold' ? 'text-[24px] font-bold text-brown-100 font-poppins' : ''}
        ${type === 'text_button_white' ? 'font-medium text-[18px] text-white-100 font-poppins' : ''}
        ${type === 'text_button_blue' ? 'font-medium text-[18px] text-blue-100 font-poppins' : ''}
        ${type === 'text_button_red' ? 'font-medium text-[18px] text-red-100 font-poppins' : ''}
        ${type === 'text_button_red' ? 'font-medium text-[18px] text-red-100 font-poppins' : ''}
        ${type === 'panel-text' ? 'font-normal text-[16px] lg:text-[18px] leading-none text-brown-100 font-mont' : ''}
        ${type === 'panel-title' ? 'font-semibold text-[24px] lg:text-[26px] leading-none text-dark-100 font-poppins' : ''}
        ${type === 'panel-heading' ? 'font-semibold text-[18px] md:text-[24px] lg:text-[34px] text-brown-100 font-poppins' : ''}
        ${type === 'panel-title-blue' ? 'font-semibold text-[20px] lg:text-[22px] leading-none text-blue-100 font-poppins ' : ''}
        ${type === 'panel-table-header' ? 'font-normal text-[15px] md:text-[12px] leading-none llg:text-[18px] font-poppins' : ''}

        ${type === 'empty' ? '' : ''}
        ${className}`.trim()}
            {...rest}
        />
    );
}
