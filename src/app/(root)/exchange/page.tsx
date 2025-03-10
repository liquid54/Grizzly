import Exchange from "@/components/Exchange";
import {ThemedText} from "@/components/ThemedText";


const ExchangePage = () => {
  return (
    <div className='px-[357px] pb-[100px] pt-[110px] flex flex-col gap-y-[30px]'>
        <div className='flex justify-center'>
            <ThemedText type='title'>Cryptocurrency Exchange</ThemedText>
        </div>
      <Exchange visibleBorder={true}/>
    </div>
  );
}

export default ExchangePage;