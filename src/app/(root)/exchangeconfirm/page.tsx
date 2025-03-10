import Input from "@/components/Input";
import {ThemedText} from "@/components/ThemedText";
import Button from "@/components/Button";


const ExConfirm = () => {
  return (
    <div className='px-[515px] pt-[50px] pb-[23px]'>
        <div className='px-[194px] flex flex-col gap-y-[30px]'>
            <Input label={'Whatsapp'} placeholder={'Confirm your Whatsapp'} />
            <Input label={'Telegram'} placeholder={'Confirm your Telegram'} />
            <div>
                <Input label={'Comfirm your email'} placeholder={'Write your code'} />
                <ThemedText type='link_text'>Send code again</ThemedText>
            </div>
            <div className='flex justify-center'>
                <Button size='medium'>Continue</Button>
            </div>
        </div>

    </div>
  );
}

export default ExConfirm;