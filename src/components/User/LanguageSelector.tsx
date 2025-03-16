import Image from 'next/image';
import Arrow from '@/assets/icons/Arrow';
import {ThemedText} from '../ThemedText';

interface LanguageSwitcherProps {
    showLanguageIcon?: boolean;
}

const LanguageSwitcher = ({
                              showLanguageIcon = true,
                          }: LanguageSwitcherProps) => {
    return (
        <>
            <Arrow className='fill-black'/>
            <ThemedText type='text'>ENG</ThemedText>
            {showLanguageIcon && (
                <Image
                    width={26}
                    height={26}
                    src='/1ce666ba34b05a5da3227263f42f23aa.png'
                    alt='Language icon'
                    className='rounded-full w-6 h-6 ml-2'
                />
            )}
        </>
    );
};

export default LanguageSwitcher;
