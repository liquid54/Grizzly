import type { OpenMenuProps } from '@/types/main';
import MenuWrapper from '@/components/menu/MenuWrapper';

const SettingsMenu = ({ isOpen, setIsOpen }: OpenMenuProps) => {
    console.log('menu', isOpen);
    return (
        <MenuWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
            <nav className='flex flex-col gap-5'></nav>
        </MenuWrapper>
    );
};

export default SettingsMenu;
