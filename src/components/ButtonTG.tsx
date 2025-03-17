// ButtonTg.js - спрощений підхід
import Button from '@/components/Button';
import Telegram from '@/assets/icons/Telegram';

const ButtonTg = ({ isMain = false }: { isMain?: boolean }) => {
    return (
        <>
            {/* Варіант для медіум і більших екранів */}
            <div className={isMain ? '' : 'hidden md:block'}>
                <Button
                    size='tiny'
                    variant='social'
                    className='flex cursor-pointer justify-center items-center border-2'
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
                            variant='secondary'
                            className='!w-full flex cursor-pointer justify-center items-center border-2'
                        >
                            <Telegram />
                            <span className='ml-2'>Telegram</span>
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ButtonTg;
