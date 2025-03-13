import Exchange from "@/components/features/Exchange/Exchange";
import {ThemedText} from "@/components/ThemedText";


const ExchangePage = () => {
  return (
    <div className='px-[357px] pb-[110px] pt-[100px] flex flex-col gap-y-[30px]'>
        <div className='flex items-center justify-center'>
            <ThemedText type='title'>Cryptocurrency Exchange</ThemedText>
        </div>
      <div className='px-[58px]'>
          <Exchange visibleBorder={true} fullWindow={true}/>
      </div>
    </div>
  );
}

export default ExchangePage;