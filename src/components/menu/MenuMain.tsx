import {OpenMenuProps} from "@/types/main";
import {usePathname} from "next/navigation";
import MenuWrapper from "@/components/menu/MenuWrapper";
import {MAIN_MENU_LINKS} from "@/constants/panel-links";
import SettingsMenuButton from "@/features/user-dashboard/components/settings-menu/SettingMenuButton";
import Button from "@/components/Button";
import LanguageSwitcher from "@/components/User/LanguageSelector";

const SettingsMenu = ({isOpen, setIsOpen}: OpenMenuProps) => {
    const pathname = usePathname();
    const currentPage = pathname?.replace('/main/', '');

    return (
        <MenuWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
            <nav className='flex flex-col justify-between h-full pt-8 lg:pt-0'>
                <div className="flex flex-col gap-5">
                    {MAIN_MENU_LINKS.map((l, i) => {
                        const current = l.href?.replace('/main/', '') || '';
                        return (
                            <SettingsMenuButton
                                onClick={() => setIsOpen && setIsOpen()}
                                key={`panel-${l.label}-${i}`}
                                href={l.href}
                                label={l.label}
                                isActive={currentPage.includes(current)}
                            />
                        );
                    })}
                </div>

                <div className="flex flex-col">
                    <LanguageSwitcher/>
                    <div className='space-x-4'>
                        <Button variant="primary" size="tiny" className='md:w-[256px] sm:w-[171px]'>
                            NewB
                        </Button>

                        <Button variant="secondary" size="tiny" className='sm:w-[256px] sm:w-[171px]'>
                            NewA
                        </Button>
                    </div>
                </div>
            </nav>
        </MenuWrapper>
    );
};

export default SettingsMenu;