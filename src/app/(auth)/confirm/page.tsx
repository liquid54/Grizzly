'use client';
import Input from '@/components/Input';
import { ThemedText } from '@/components/ThemedText';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pages } from '@/constants/pages';

const Confirm = () => {
    const { push } = useRouter();
    const [state, setState] = useState<string>('');

    const onFakeLogin = () => {
        if (state === '111111') {
            push(Pages.ADMIN_TRANSACTIONS);
        } else {
            push(Pages.USER_PANEL_MAIN);
        }
    };
    return (
        <div className='flex flex-col gap-y-[20px] items-center'>
            <div className='flex flex-col gap-y-[10px] items-center justify-center pb-[10px]'>
                <div className='flex flex-col items-center'>
                    <Avatar
                        size={100}
                        src='/IMG_5815 (1).png'
                        alt='logo'
                        className='w-[90px] h-[90px] md:w-[100px] md:h-[100px]'
                    />
                    <ThemedText
                        type='empty'
                        className='font-semibold text-brown-100 text-center font-unbounded text-[24px] sm:text-[36px]'
                    >
                        Security screening requirements
                    </ThemedText>
                </div>
                <ThemedText className='text-gray-200 text-center'>
                    To continue, you must complete all of the verifications
                    listed below.
                </ThemedText>
            </div>

            <Input
                value={state}
                onChange={value => setState(value)}
                label={'Email confirmation code'}
                requiredMark='*'
                placeholder={'Write your code'}
            />
            <Input
                label={'Authenticator app'}
                requiredMark='*'
                placeholder={'Write your code'}
                containerClass='mb-[10px]'
            />

            <Button onClick={onFakeLogin} size='xl'>
                Continue
            </Button>
        </div>
    );
};

export default Confirm;
