import { ThemedText } from '@/components/ThemedText';

const Agreement = () => {
    return (
        <form className='space-y-[10px]'>
            <div className='flex gap-x-[20px]'>
                <input type='checkbox' id='rules-agreement' />
                <label htmlFor='rules-agreement'>
                    <ThemedText type='text_agreement'>
                        I agree to the rules and policies Cobra exchange
                    </ThemedText>
                </label>
            </div>

            <div className='flex gap-x-[20px]'>
                <input type='checkbox' id='email-notifications' />
                <label htmlFor='email-notifications'>
                    <ThemedText type='text_agreement'>
                        I want to receive email notifications
                    </ThemedText>
                </label>
            </div>
        </form>
    );
};

export default Agreement;
