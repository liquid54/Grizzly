import Image from "next/image";


const CryptoIcon = ({icon, size = "w-12 h-12", iconSize, className}: {
    icon: string;
    size?: string;
    iconSize: number;
    className?: string

}) => {
    return (
        <div className={`absolute rounded-full flex items-center justify-center  ${size} ${className}`}>
            <Image src={`/assets/icons/${icon}.svg`} alt={icon} width={iconSize} height={iconSize}/>
        </div>
    );
};

export default CryptoIcon