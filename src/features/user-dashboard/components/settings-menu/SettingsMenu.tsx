import type { OpenMenuProps } from '@/types/main';
import MenuWrapper from '@/components/menu/MenuWrapper';
import { USER_MENU_LINKS } from '@/constants/panel-links';
import SettingsMenuButton from './SettingMenuButton';
import { usePathname } from 'next/navigation';

const SettingsMenu = ({ isOpen, setIsOpen }: OpenMenuProps) => {
    const pathname = usePathname();

    return (
        <MenuWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
            <nav className='flex flex-col gap-5 pt-8 lg:pt-0'>
                {USER_MENU_LINKS.map((l, i) => {
                    // Перевіряємо чи поточний шлях дорівнює href або чи починається з /main/exchange/
                    const isActive = pathname === l.href ||
                        (l.href === '/main/exchange' && pathname.startsWith('/main/exchange'));

                    return (
                        <SettingsMenuButton
                            onClick={setIsOpen}
                            key={`panel-${l.label}-${i}`}
                            {...l}
                            src={isActive ? l.activeSrc : l.src}
                            isActive={isActive}
                        />
                    );
                })}
            </nav>
        </MenuWrapper>
    );
};

export default SettingsMenu;