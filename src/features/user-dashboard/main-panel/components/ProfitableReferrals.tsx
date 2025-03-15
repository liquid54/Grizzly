import Button from '@/components/Button';
import { ThemedText } from '@/components/ThemedText';
import { Pages } from '@/constants/pages';
import Link from 'next/link';
import React from 'react';
import Table from '../../components/table/Table';
import { data, header } from '../../components/table/mockReferralsData';

const ProfitableReferrals = () => {
    return (
        <div className='flex flex-col gap-4 md:gap-5 lg:gap-8'>
            <div className='flex items-center justify-between pt-5 md:pt-0'>
                <ThemedText type='panel-heading'>
                    Most profitable referrals
                </ThemedText>
                <Link
                    href={Pages.USER_PANEL_REFERRALS}
                    className='hidden sm:block'
                >
                    <Button variant='secondary' size='small'>
                        Referrals
                    </Button>
                </Link>
            </div>
            <Table
                tableHeader={header}
                indexMobileDismiss={[2]}
                data={data}
                gridTemplateColumns='135px 110px 130px 110px 150px 120px'
                firstRenderElementKeys={['referral', 'telegram']}
            />
            <Link href={Pages.USER_PANEL_REFERRALS} className='sm:hidden'>
                <Button variant='secondary' size='small'>
                    Referrals
                </Button>
            </Link>
        </div>
    );
};

export default ProfitableReferrals;
