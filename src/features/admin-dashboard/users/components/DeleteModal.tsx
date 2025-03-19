import Box from '@/components/Box';
import Button from '@/components/Button';
import Modal, { ModalProps } from '@/components/modal/ModalWrapper';
import React from 'react';

interface DeleteModalProps extends Omit<ModalProps, 'children' | 'title'> {
    onConfirm?: () => void;
    onCancel?: () => void;
}

const DeleteMOdal = ({
    isOpen,
    onClose,
    onConfirm,
    onCancel,
}: DeleteModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title='Deleting user'
            isClosable={false}
            classes={{ container: 'max-w-[363px]' }}
        >
            <Box type='column' className='gap-4 sm:gap-12 pt-2'>
                <p className='text-[14px] lg:text-[16px] leading-none font-normal text-brown-100 font-poppins'>
                    Do you really want to delete this user?
                </p>
                <Box className='gap-4'>
                    <Button variant='primary' size='_small' onClick={onConfirm}>
                        Delete
                    </Button>
                    <Button
                        variant='secondary'
                        size='_small'
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default DeleteMOdal;
