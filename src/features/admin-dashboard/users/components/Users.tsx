'use client';
import { ThemedText } from '@/components/ThemedText';
import React, { useState } from 'react';
import Overviews from '../../components/overview/Overviews';
import Table from '@/components/table/Table';
import { data, header } from '@/components/table/mockUsers';
import { Pages } from '@/constants/pages';
import CommonFilters from '@/components/Filters/CommonFilters';
import UsersDropdown from './UserDropdown';
import DeleteMOdal from './DeleteModal';

const overviewData = [
    { title: 'Total users', value: 1482, percentage: 12, progress: 22 },
    { title: 'Administrators', value: 322, percentage: 10, progress: 77 },
    { title: 'Users online', value: 222, percentage: 12, progress: 77 },
    { title: 'Most active', value: 1482, percentage: 12, progress: 22 },
];

const Users = () => {
    const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);

    const onOpenDeleteModal = () => setIsDeleteOpen(true);
    const onDeleteUser = () => setIsDeleteOpen(false);

    return (
        <>
            <div className='w-full flex flex-grow flex-col gap-5 xs:rounded-2xl xs:border xs:border-white-200 lg:border-0 xs:p-[30px] lg:p-0'>
                <div className='w-full flex flex-col gap-4 md:gap-[10px] lg:gap-5'>
                    <ThemedText
                        type='title_poppins'
                        className='text-[24px] lg:text-[34px] leading-none'
                    >
                        Users
                    </ThemedText>

                    {/* filters */}
                    <CommonFilters
                        filters={['Wallet type', 'Sort by']}
                        cols={2}
                    />
                </div>

                <Overviews data={overviewData} />

                {/* table */}
                <div className='mt-[10px]'>
                    <Table
                        tableHeader={header}
                        data={data}
                        indexMobileDismiss={[1]}
                        renderWithSettings='telegram'
                        missTruncate={[0, 1]}
                        gridTemplateColumns='grid-cols-[120px_150px_80px_90px_105px_125px_20px] llg:grid-cols-[175px_175px_110px_120px_145px_170px_20px]'
                        firstRenderElementKeys={['name', 'telegram']}
                        href={Pages.ADMIN_USERS_USER}
                        settingsMenu={
                            <UsersDropdown onOpenDeletion={onOpenDeleteModal} />
                        }
                    />
                </div>
            </div>
            <DeleteMOdal
                isOpen={isDeleteOpen}
                onClose={onDeleteUser}
                onCancel={onDeleteUser}
                onConfirm={onDeleteUser}
            />
        </>
    );
};

export default Users;
