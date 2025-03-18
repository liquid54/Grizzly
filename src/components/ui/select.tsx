import * as Select from '@radix-ui/react-select';
import Arrow from '@/assets/icons/Arrow';
import { ThemedText } from '../ThemedText';

interface SelectProps {
    title?: string;
    classes?: {
        trigger?: string;
        content?: string;
    };
}

const CustomSelect = ({ title, classes }: SelectProps) => {
    return (
        <div className='flex flex-col gap-2 w-full max-w-full'>
            {title && <ThemedText type='panel-medium-text'>{title}</ThemedText>}
            <Select.Root>
                <Select.Trigger
                    className={`cursor-pointer inline-flex items-center justify-between  w-full max-w-full pl-[14px] pr-[10px] py-2 border border-white-200 rounded-xl bg-white text-brown-100 font-poppins focus:ring-2 focus:ring-blue-500 ${classes?.trigger}`}
                >
                    <Select.Value placeholder='All' />
                    <Select.Icon>
                        <Arrow className='fill-black transition-transform duration-200' />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                    <Select.Content
                        className={`bg-white border border-white-200  w-full max-w-full rounded-lg shadow-md z-[9999] ${classes?.content}`}
                        position='popper'
                        sideOffset={4}
                        style={{ width: 'var(--radix-select-trigger-width)' }}
                    >
                        <Select.Viewport className='p-2'>
                            <Select.Item
                                value='option1'
                                className='px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center'
                            >
                                <Select.ItemText>Option 1</Select.ItemText>
                            </Select.Item>
                            <Select.Item
                                value='option2'
                                className='px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center'
                            >
                                <Select.ItemText>Option 2</Select.ItemText>
                            </Select.Item>
                            <Select.Item
                                value='option3'
                                className='px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center'
                            >
                                <Select.ItemText>Option 3</Select.ItemText>
                            </Select.Item>
                        </Select.Viewport>
                    </Select.Content>
                </Select.Portal>
            </Select.Root>
        </div>
    );
};

export default CustomSelect;
