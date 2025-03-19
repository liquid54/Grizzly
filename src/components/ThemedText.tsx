import { cn } from '@/utils';
import React from 'react';

export type textEnum =
    | 'heading'
    | 'heading_blue'
    | 'title'
    | 'title_poppins'
    | 'title_exchange'
    | 'title_currency'
    | 'title_about'
    | 'title_card_about'
    | 'title_faq'
    | 'title_terms'
    | 'text_agreement'
    | 'subtitle'
    | 'subtitle_blue'
    | 'subtitle_faq'
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
    | 'panel-medium-text'
    | 'panel-medium-text-blue'
    | 'text-footer'
    | 'text-main'
    | 'text-select'
    | 'text_card_about'
    | 'admin-text-small'
    | 'admin-subtitle'
    | 'admin-subtitle-bold'
    | 'admin-progress'
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
            className={cn(`
        ${type === 'heading' ? 'lg:text-[70px] md:text-[50px] text-[35px] font-bold text-brown-100 font-unbounded leading-[100%] tracking-[0%]' : ''}
        ${type === 'heading_blue' ? 'lg:text-[70px] md:text-[50px] text-[35px] font-bold text-blue-100 font-unbounded leading-[100%] tracking-[0%]' : ''}
        ${type === 'title' ? 'lg:text-[52px] text-[35px] font-semibold text-brown-100 font-unbounded' : ''}
        ${type === 'title_poppins' ? 'text-[24px] font-semibold text-brown-100 font-poppins' : ''}
        ${type === 'subtitle' ? 'text-[18px] sm:text-[20px] font-bold text-brown-100 font-poppins' : ''}
        ${type === 'subtitle_blue' ? 'text-[34px] font-bold text-blue-100 font-unbounded' : ''}

        ${type === 'title_exchange' ? 'text-[24px] sm:text-[35px] lg:text-[52px] font-semibold text-brown-100 font-unbounded' : ''}
        ${type === 'text_exchange' ? 'text-[16px] lg:text-[18px]  font-normal text-brown-100 font-poppins' : ''}
        ${type === 'text_agreement' ? 'text-[15px] font-normal text-brown-100 font-poppins ' : ''}
        
        ${type === 'text' ? 'text-[16px] sm:text-[18px] text-brown-100 font-poppins' : ''}
        ${type === 'text_blue' ? 'text-[16px] sm:text-[18px] font-bold text-blue-100 font-poppins' : ''}
        ${type === 'link_text' ? 'text-[16px] sm:text-[18px] text-blue-100 font-poppins' : ''}
        ${type === 'placeholder_text' ? 'text-[24px] text-white-200 font-poppins' : ''}
        ${type === 'text_bold' ? 'text-[24px] font-bold text-brown-100 font-poppins' : ''}
        ${type === 'text_button_white' ? 'font-medium text-[18px] text-white-100 font-poppins' : ''}
        ${type === 'text_button_blue' ? 'font-medium text-[18px] text-blue-100 font-poppins' : ''}
        ${type === 'text_button_red' ? 'font-medium text-[18px] text-red-100 font-poppins' : ''}
        ${type === 'text_button_red' ? 'font-medium text-[18px] text-red-100 font-poppins' : ''}
        ${type === 'panel-text' ? 'font-normal text-[16px] lg:text-[18px] leading-none text-brown-100 font-mont' : ''}
        ${type === 'panel-title' ? 'font-semibold text-[24px] lg:text-[26px] leading-none text-dark-100 font-poppins' : ''}
        ${type === 'panel-heading' ? 'font-semibold text-[18px] md:text-[24px] lg:text-[34px] text-brown-100 font-poppins' : ''}
        ${type === 'panel-title-blue' ? 'font-semibold text-[20px] lg:text-[22px] leading-none text-blue-100 font-poppins' : ''}
        ${type === 'panel-table-header' ? 'font-normal text-[15px] md:text-[13px] leading-none llg:text-[18px] font-poppins' : ''}
        ${type === 'panel-medium-text' ? 'text-[16px] leading-none font-medium text-brown-100 font-poppins' : ''}
        ${type === 'panel-medium-text-blue' ? 'text-[16px] font-medium text-blue-100 font-poppins' : ''}
        ${type === 'text-footer' ? 'text-[15px] text-brown-100 font-poppins' : ''}
        ${type === 'text-main' ? 'text-[16px] lg:text-[18px] text-brown-100 font-poppins' : ''}
        ${type === 'admin-text-small' ? 'text-[12px] md:text-[14px] font-poppins' : ''}
        ${type === 'admin-subtitle' ? 'text-[14px] lg:text-[22px] font-semibold font-poppins' : ''}
        ${type === 'admin-subtitle-bold' ? 'text-[22px] lg:text-[32px] font-bold font-poppins' : ''}
        ${type === 'admin-progress' ? 'text-[14px] lg:text-[20px] font-semibold font-poppins' : ''}
        
        ${type === 'text-select' ? 'text-[16px] sm:text-[24px] md:font-semibold font-medium text-brown-100 font-poppins' : ''}
        ${type === 'title_currency' ? 'lg:text-[52px] md:text-[35px] text-[24px] font-semibold text-brown-100 font-unbounded' : ''}
        
        ${type === 'title_about' ? 'lg:text-[52px] md:text-[36px] text-[24px] font-semibold text-brown-100 font-unbounded' : ''}
        ${type === 'title_card_about' ? 'md:text-[36px] text-[24px] font-bold text-brown-100 font-unbounded' : ''}
        ${type === 'text_card_about' ? 'text-[16px] font-normal font-poppins' : ''}
        
        ${type === 'title_faq' ? 'md:text-[36px] text-[24px] font-semibold text-brown-100 font-unbounded' : ''}
        ${type === 'title_terms' ? 'md:text-[36px] text-[24px] font-semibold text-brown-100 lg:font-poppins font-unbounded' : ''}
        ${type === 'subtitle_faq' ? 'md:text-[24px] text-[15px] font-semibold text-brown-100 font-poppins' : ''}

        ${type === 'empty' ? '' : ''}
        ${className}`)}
            {...rest}
        />
    );
}
