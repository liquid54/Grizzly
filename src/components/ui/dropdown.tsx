'use client';
import { ReactNode, forwardRef } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '@/utils';

import Dots from 'p/icons/more.svg';

interface DropdownProps {
    trigger?: ReactNode;
    children: ReactNode;
    classes?: {
        trigger?: string;
        content?: string;
    };
    side?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'center' | 'start' | 'end';
    sideOffset?: number;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const CustomDropdownMenu = ({
    trigger,
    children,
    classes,
    side = 'left',
    align = 'start',
    sideOffset,
    isOpen,
    setIsOpen,
}: DropdownProps) => {
    return (
        <DropdownMenu.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenu.Trigger
                className={cn(
                    `cursor-pointer flex select-none justify-center items-center`,
                    classes?.trigger,
                )}
                onClick={e => e.stopPropagation()}
            >
                {trigger || <Dots />}
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className={cn(
                        `bg-white border border-white-200 rounded-xl min-w-[250px] sm:min-w-[300px] shadow-dropdown z-20`,
                        classes?.content,
                    )}
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    onClick={e => e.stopPropagation()}
                >
                    {children}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default CustomDropdownMenu;

const MenuItem = forwardRef<
    React.ElementRef<typeof DropdownMenu.Item>,
    React.ComponentPropsWithoutRef<typeof DropdownMenu.Item> & {}
>(({ className, ...props }, ref) => (
    <DropdownMenu.Item
        ref={ref}
        className={cn(
            'hover:bg-white-300/5 relative cursor-pointer flex items-center gap-4 px-5 pt-3 pb-[14px] sm:px-5 sm:py-5 text-[15px] lg:text-[18px] font-normal leading-none font-poppins',

            className,
        )}
        {...props}
    />
));
MenuItem.displayName = DropdownMenu.Item.displayName;

const MenuSeparator = forwardRef<
    React.ElementRef<typeof DropdownMenu.Separator>,
    React.ComponentPropsWithoutRef<typeof DropdownMenu.Separator> & {}
>(({ className, ...props }, ref) => (
    <DropdownMenu.Separator
        ref={ref}
        className={cn('relative bg-white-200 h-[1px] w-full', className)}
        {...props}
    />
));
MenuSeparator.displayName = DropdownMenu.Item.displayName;

export { MenuItem, MenuSeparator };
