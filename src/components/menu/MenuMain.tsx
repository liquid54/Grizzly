import { OpenMenuProps } from '@/types/main';
import { usePathname } from 'next/navigation';
import MenuWrapper from '@/components/menu/MenuWrapper';
import { USER_MENU_LINKS } from '@/constants/panel-links';
import MainMenuButton from './MainButton';

const MainMenu = ({ isOpen, setIsOpen }: OpenMenuProps) => {
    const pathname = usePathname();
    const currentPage = pathname?.replace('/main/', '');

    return (
        <MenuWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
            <nav className='flex flex-col justify-between h-full pt-8 lg:pt-0'>
                <div className='flex flex-col gap-5'>
                    {USER_MENU_LINKS.map((l, i) => {
                        const current = l.href?.replace('/main/', '') || '';
                        return (
                            <MainMenuButton
                                onClick={() => setIsOpen && setIsOpen()}
                                key={`panel-${l.label}-${i}`}
                                href={l.href}
                                label={l.label}
                                isActive={currentPage.includes(current)}
                            />
                        );
                    })}
                </div>
            </nav>
        </MenuWrapper>
    );
};

export default MainMenu;
