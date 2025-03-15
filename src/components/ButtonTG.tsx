import Button from '@/components/Button';

import Telegram from '@/assets/icons/Telegram';

const ButtonTg = () => {
    return (
        <Button
            size='tiny'
            variant='social'
            className='flex cursor-pointer justify-center items-center'
        >
            <Telegram />
        </Button>
    );
};
export default ButtonTg;
