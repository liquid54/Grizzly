// ButtonTg.js - спрощений підхід
import Button from '@/components/Button';
import Telegram from '@/assets/icons/Telegram';
import { ThemedText } from './ThemedText';

const ButtonTg = ({ isMain = false }: { isMain?: boolean }) => {
    return (
        <>
            {/* Варіант для медіум і більших екранів */}
            <div className={isMain ? '' : 'hidden md:block'}>
                <Button
                    size='tiny'
                    variant='social'
                    className='flex cursor-pointer justify-center items-center '
                >
                    <Telegram />
                </Button>
            </div>

            {/* Варіант для малих екранів */}
            {!isMain && (
                <div className='md:hidden block w-full'>
                    <div className='w-full'>
                        <Button
                            size='small' // змінив на small замість medium
                            variant='blue'
                            className='!w-full flex cursor-pointer justify-center items-center border-2'
                        >
                            <Telegram />
                            <ThemedText type='button_blue' className='ml-2'>
                                Telegram
                            </ThemedText>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ButtonTg;
