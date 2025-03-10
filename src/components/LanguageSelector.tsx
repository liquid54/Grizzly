import Image from "next/image";
import Arrow from "@/assets/icons/Arrow";
import {ThemedText} from "./ThemedText";
import ButtonTg from "@/components/ButtonTG";

interface LanguageSwitcherProps {
    showLanguageIcon?: boolean;
}

const LanguageSwitcher = ({showLanguageIcon = true}: LanguageSwitcherProps) => {
    return (
        <div className='flex flex-row justify-center gap-x-[16px] items-center'>
            <div className="flex flex-row justify-center items-center gap-x-2">
                <Arrow className="fill-black"/>
                <ThemedText type="text">ENG</ThemedText>
                {showLanguageIcon && (
                    <Image
                        width={26}
                        height={26}
                        src="/1ce666ba34b05a5da3227263f42f23aa.png"
                        alt="Language icon"
                        className="rounded-full w-6 h-6"
                    />
                )}
            </div>
            <ButtonTg/>
        </div>
    );
};

export default LanguageSwitcher;