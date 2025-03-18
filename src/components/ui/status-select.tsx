import * as Select from '@radix-ui/react-select';
import Arrow from '@/assets/icons/Arrow';
import { cn } from '@/utils';

interface SelectProps {
    classes?: {
        trigger?: string;
        content?: string;
        value?: string;
    };
    size?: 'small' | 'large';
}

const sizeStyles = {
    small: 'h-[48px] w-full sm:h-[63px] sm:w-[209px] rounded-[90px] gap-[10px]  sm:rounded-[18px] px-6 py-3 sm:px-3 sm:py-4 sm:pl-4',
    large: '',
};

const AdminSelect = ({ classes, size = 'small' }: SelectProps) => {
    return (
        <Select.Root>
            <Select.Trigger
                className={cn(
                    `cursor-pointer inline-flex items-center justify-between text-base sm:text-[18px] font-medium border-2 border-blue-100 rounded-xl bg-white text-blue-100 font-poppins focus:ring-2 focus:ring-blue-500 ${classes?.trigger || ''} ${sizeStyles[size]}`,
                )}
            >
                <Select.Value
                    placeholder='Change status'
                    className={cn('w-full sm:w-fit', classes?.value || '')}
                />
                <Select.Icon>
                    <Arrow className='fill-black transition-transform duration-200' />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content
                    className={`bg-white border border-white-200  w-full max-w-full rounded-lg shadow-md z-[9999] ${classes?.content || ''}`}
                    position='popper'
                    sideOffset={4}
                    style={{ width: 'var(--radix-select-trigger-width)' }}
                >
                    <Select.Viewport className='p-2'>
                        <Select.Item
                            value='option1'
                            className='px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center'
                        >
                            <Select.ItemText>Done</Select.ItemText>
                        </Select.Item>
                        <Select.Item
                            value='option2'
                            className='px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center'
                        >
                            <Select.ItemText>In process</Select.ItemText>
                        </Select.Item>
                        <Select.Item
                            value='option3'
                            className='px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center'
                        >
                            <Select.ItemText>Failed</Select.ItemText>
                        </Select.Item>
                    </Select.Viewport>
                </Select.Content>
            </Select.Portal>
        </Select.Root>
    );
};

export default AdminSelect;
