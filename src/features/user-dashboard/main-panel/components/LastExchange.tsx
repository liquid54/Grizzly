import Button from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { Pages } from '@/constants/pages';
import Link from 'next/link';
import React from 'react';
import Table from '../../components/table/Table';
import { data, header } from '../../components/table/mockTransactionsData';

const LastExchange = () => {
    return (
        <div className='flex flex-col gap-4 md:gap-5 lg:gap-8'>
            <div className='flex items-center justify-between'>
                <ThemedText type='panel-heading'>Last exchanges</ThemedText>
                <Link
                    href={Pages.USER_PANEL_EXCHANGE}
                    className='hidden sm:block'
                >
                    <Button variant='secondary' size='small'>
                        Exchanges
                    </Button>
                </Link>
            </div>
            <Table
                tableHeader={header}
                indexMobileDismiss={[6]}
                data={data}
                gridTemplateColumns='135px 70px 50px 80px 120px 180px 50px'
                firstRenderElementKeys={['currency', 'status']}
                pagination={false}
                href={Pages.USER_PANEL_TRANSACTION}
            />
            <Link href={Pages.USER_PANEL_EXCHANGE} className='sm:hidden'>
                <Button variant='secondary' size='small'>
                    Exchanges
                </Button>
            </Link>
        </div>
    );
};

export default LastExchange;
