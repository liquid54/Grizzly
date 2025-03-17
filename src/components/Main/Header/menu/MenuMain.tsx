import {OpenMenuProps} from "@/types/main";
import {usePathname} from "next/navigation";
import MenuWrapper from "@/components/Main/Header/menu/MenuWrapper";
import {MAIN_MENU_LINKS} from "@/constants/panel-links";
import SettingsMenuButton from "@/features/user-dashboard/components/settings-menu/SettingMenuButton";
import Button from "@/components/Button";
import LanguageSwitcher from "@/components/User/LanguageSelector";
import Link from "next/link";
import SettingsMenuText from "@/components/Main/Header/menu/SettingMenuText";

const SettingsMainMenu = ({isOpen, setIsOpen}: OpenMenuProps) => {
    const pathname = usePathname();
    const currentPage = pathname?.replace('/main/', '');

    return (
        <MenuWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
            <nav className='flex flex-col justify-between h-full pt-8 lg:pt-0'>
                <div className="flex flex-col gap-5">
                    {MAIN_MENU_LINKS.map((l, i) => {
                        const current = l.href?.replace('/main/', '') || '';
                        return (
                            <SettingsMenuText
                                onClick={() => setIsOpen && setIsOpen()}
                                key={`panel-${l.label}-${i}`}
                                href={l.href}
                                label={l.label}
                                isActive={currentPage.includes(current)}
                            />
                        );
                    })}
                </div>

                <div className="flex flex-col gap-y-[30px] pb-[50px] sm:gap-y-[50px] sm:pb-[30px]">
                    <div className='flex flex-row gap-x-[10px]'>
                        <LanguageSwitcher/>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <Link href='/login' className='w-full'>
                            <Button variant="primary" size="tiny" className='md:w-[256px] w-full'>
                                Log In
                            </Button>
                        </Link>

                        <Link href='/signup' className='w-full'>
                            <Button variant="secondary" size="tiny" className='md:w-[256px] w-full'>
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </MenuWrapper>
    );
};

export default SettingsMainMenu;