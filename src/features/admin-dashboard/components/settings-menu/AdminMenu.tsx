import SettingsMenuButton from '@/features/user-dashboard/components/settings-menu/SettingMenuButton';
import { usePathname } from 'next/navigation';
import MenuWrapper from '@/components/menu/MenuWrapper';
import { OpenMenuProps } from '@/types/main';
import { ADMIN_MENU_LINKS } from '@/constants/admin-links';

const AdminMenu = ({ isOpen, setIsOpen }: OpenMenuProps) => {
    const pathname = usePathname();
    const currentPage = pathname?.replace('/admin/', '');

    return (
        <MenuWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
            <nav className='flex flex-col gap-5 pt-8 lg:pt-0'>
                {ADMIN_MENU_LINKS.map((l, i) => {
                    const current = l.href?.replace('/admin/', '');
                    return (
                        <SettingsMenuButton
                            onClick={setIsOpen}
                            key={`admin-${l.label}-${i}`}
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

export default AdminMenu;
