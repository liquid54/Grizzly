import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";
import GroupCoins from "@/assets/icons/coins/GroupCoins";


const AboutUs = () => {
    return (
        <div className='flex flex-row justify-between px-[370px] py-[150px] gap-x-[167px]'>
            <div className='flex flex-col gap-y-[40px]'>
                <div className='flex flex-col'>
                    <ThemedText type='title'>About us</ThemedText>
                    <ThemedText>Lorem ipsum dolor sit amet consectetur. Mi cras aliquam dui sagittis id dignissim interdum. Purus sed viverra facilisis bibendum facilisis risus. Diam et diam vel magna arcu. Nisi nulla non dolor rhoncus etiam aliquam. Sit sapien sit posuere at sodales volutpat quisque. Senectus enim ut sed turpis in pretium pharetra morbi. Lacinia sed congue consequat molestie sed sit massa erat.</ThemedText>
                </div>
                <Button size='medium'>Get started</Button>
            </div>
            <div>
                <GroupCoins/>
            </div>
        </div>
    )
}

export default AboutUs;