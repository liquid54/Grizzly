import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import GroupCoins from "@/assets/icons/coins/GroupCoins";


const AboutUs = () => {
    return (
        <div className='flex flex-row justify-between border border-[#CFCEDB] rounded-[30px] items-center px-[30px] '>
            <div className='flex flex-col gap-y-[40px]'>
                <div className='flex flex-col gap-y-[10px]'>
                    <ThemedText type='title'>About us</ThemedText>
                    <ThemedText>Lorem ipsum dolor sit amet consectetur. Mi cras aliquam dui sagittis id dignissim interdum. Purus sed viverra facilisis bibendum facilisis risus. Diam et diam vel magna arcu. Nisi nulla non dolor rhoncus etiam aliquam. Sit sapien sit posuere at sodales volutpat quisque. Senectus enim ut sed turpis in pretium pharetra morbi. Lacinia sed congue consequat molestie sed sit massa erat.</ThemedText>
                </div>
                <Button size='small'>Get started</Button>
            </div>
            <div className='pr-[47px] pl-[167px]'>
                <GroupCoins/>
            </div>
        </div>
    )
}

export default AboutUs;