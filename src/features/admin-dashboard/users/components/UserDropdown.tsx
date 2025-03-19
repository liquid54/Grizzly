'use client';
import CustomDropdownMenu, {
    MenuItem,
    MenuSeparator,
} from '@/components/ui/dropdown';
import { useState } from 'react';

import Star from 'p/icons/star.svg';
import Trash from 'p/icons/trash.svg';
import Box from '@/components/Box';

interface UserDropdownProps {
    onOpenDeletion?: () => void;
}

const UsersDropdown = ({ onOpenDeletion }: UserDropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <CustomDropdownMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            classes={{ trigger: 'w-[22px] h-[22px] p-0' }}
            sideOffset={-5}
        >
            <MenuItem
                onClick={e => e.stopPropagation()}
                className='text-blue-100'
            >
                <Box
                    type='row-center'
                    className='justify-center w-[22px] h-[22px]'
                >
                    <Star />
                </Box>
                Make administrator
            </MenuItem>
            <MenuSeparator />
            <MenuItem
                onClick={e => {
                    e.stopPropagation();
                    if (onOpenDeletion) {
                        onOpenDeletion();
                    }
                }}
                className='text-red-100'
            >
                <Box
                    type='row-center'
                    className='justify-center w-[22px] h-[22px]'
                >
                    <Trash />
                </Box>
                Delete user
            </MenuItem>
        </CustomDropdownMenu>
    );
};

export default UsersDropdown;
