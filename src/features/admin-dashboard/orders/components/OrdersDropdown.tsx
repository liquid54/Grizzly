'use client';
import CustomDropdownMenu, {
    MenuItem,
    MenuSeparator,
} from '@/components/ui/dropdown';
import { useState } from 'react';

const OrdersDropdown = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <CustomDropdownMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            classes={{ trigger: 'w-[22px] h-[22px] p-0' }}
            sideOffset={-5}
        >
            <MenuItem onClick={e => e.stopPropagation()}>Option</MenuItem>
            <MenuSeparator />
            <MenuItem onClick={e => e.stopPropagation()}>Option 2</MenuItem>
        </CustomDropdownMenu>
    );
};

export default OrdersDropdown;
