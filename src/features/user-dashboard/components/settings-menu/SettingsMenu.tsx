import { USER_MENU_LINKS } from '@/constants/panel-links';
import SettingsMenuButton from './SettingMenuButton';
import { usePathname } from 'next/navigation';
import MenuWrapper from '@/components/menu/MenuWrapper';
import { OpenMenuProps } from '@/types/main';

const SettingsMenu = ({ isOpen, setIsOpen }: OpenMenuProps) => {
    const pathname = usePathname();
    const currentPage = pathname?.replace('/main/', '');

    return (
        <MenuWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
            <nav className='flex flex-col gap-5 pt-8 lg:pt-0'>
                {USER_MENU_LINKS.map((l, i) => {
                    const current = l.href?.replace('/main/', '');
                    return (
                        <SettingsMenuButton
                            onClick={setIsOpen}
                            key={`panel-${l.label}-${i}`}
                            {...l}
                            src={
                                currentPage.includes(current)
                                    ? l.activeSrc
                                    : l.src
                            }
                            isActive={currentPage.includes(current)}
                        />
                    );
                })}
            </nav>
        </MenuWrapper>
    );
};

export default SettingsMenu;
