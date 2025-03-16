import Box from '@/components/Box';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Modal, { ModalProps } from '@/components/modal/ModalWrapper';
import React from 'react';

const WithdrawalModal = ({
    isOpen,
    onClose,
}: Omit<ModalProps, 'children' | 'title'>) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title='Withdrawal requests'>
            <Box
                type='column'
                className='gap-5 pt-[10px] items-center md:items-start'
            >
                <p className='text-[15px] leading-none font-normal text-brown-100 font-poppins'>
                    Fill in your details so we can transfer the funds to you.
                </p>
                <Input
                    label='Your wallet'
                    placeholder='Enter your wallet or bank card'
                />
                <Input
                    label='Your Telegram'
                    placeholder='Enter your telegram'
                />
                <Button variant='primary' size='xl' className='mx-auto'>
                    Withdraw
                </Button>
            </Box>
        </Modal>
    );
};

export default WithdrawalModal;
